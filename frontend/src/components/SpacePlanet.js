import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './SpacePlanet.css';

const SpacePlanet = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const planetRef = useRef(null);
  const starsRef = useRef(null);
  const poisGroupRef = useRef(null);
  const satelliteRef = useRef(null);
  const satelliteTrailRef = useRef(null);
  const trailPositions = useRef([]);
  const orbitOffset = useRef({ x: 0, y: 0, z: 0 });
  const noiseTime = useRef(0);
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerRef = useRef(new THREE.Vector2());
  const pointerDownPosRef = useRef({ x: 0, y: 0 });
  const isPointerDownRef = useRef(false);
  const navigate = useNavigate();

  // 7 points de navigation sur la Terre
  const pois = [
    { id: 'entreprise', label: 'Entreprise', route: '/entreprise', lat: -10, lon: 60 },
    { id: 'articles', label: 'Articles', route: '/articles', lat: 40, lon: 120 },
    { id: 'contact', label: 'Contact', route: '/contact', lat: -35, lon: -120 },
    { id: 'integration', label: 'Intégration', route: '/articles/integration', lat: 50, lon: 30 },
    { id: 'difficultes', label: 'Difficultés', route: '/articles/difficultes', lat: -20, lon: 150 },
    { id: 'missions', label: 'Missions', route: '/articles/missions', lat: 10, lon: -100 },
  ];

  const latLonToVector3 = (latDeg, lonDeg, radius) => {
    const lat = THREE.MathUtils.degToRad(latDeg);
    const lon = THREE.MathUtils.degToRad(lonDeg);
    const x = radius * Math.cos(lat) * Math.cos(lon);
    const y = radius * Math.sin(lat);
    const z = radius * Math.cos(lat) * Math.sin(lon);
    return new THREE.Vector3(x, y, z);
  };

  // Fonction de bruit simplifié pour trajectoire organique
  const noise3D = (x, y, z) => {
    return (Math.sin(x * 2.1) * Math.cos(y * 1.7) * Math.sin(z * 1.3) + 
            Math.cos(x * 1.5) * Math.sin(y * 2.3) * Math.cos(z * 1.9)) * 0.5;
  };

  useEffect(() => {
    // Scène, caméra, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    // Fond noir comme l'exemple three.js
    scene.background = new THREE.Color(0x000000);
    renderer.setClearColor(0x000000, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Terre moderne noir/blanc avec textures - plus petite
    const loader = new THREE.TextureLoader();
    const earthRadius = 1.8;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    
    // Matériel Terre avec couleurs plus claires et plus de brillance
    const earthMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xaaaaaa, // Gris plus clair pour une terre plus visible
      shininess: 30,
      transparent: false
    });

    // Chargement texture Terre
    loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg', 
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        earthMaterial.map = texture;
        earthMaterial.needsUpdate = true;
      },
      undefined,
      () => {
        // Fallback si texture ne charge pas
        earthMaterial.color = new THREE.Color(0x404040);
      }
    );

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);
    planetRef.current = earthMesh;

    // Création d'un satellite professionnel type ISS/Station spatiale
    const satelliteGroup = new THREE.Group();
    
    // Module central principal (corps cylindrique réaliste) - Plus petit pour orbite
    const mainModuleGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.1, 16);
    const mainModuleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf0f0f0, // Blanc cassé réaliste
      shininess: 80,
      specular: 0x333333,
      reflectivity: 0.2
    });
    const mainModule = new THREE.Mesh(mainModuleGeometry, mainModuleMaterial);
    satelliteGroup.add(mainModule);

    // Module de service (plus petit, à l'arrière)
    const serviceModuleGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.07, 12);
    const serviceModuleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xd0d0d0, // Gris clair métallique
      shininess: 100,
      specular: 0x222222
    });
    const serviceModule = new THREE.Mesh(serviceModuleGeometry, serviceModuleMaterial);
    serviceModule.position.set(0, 0, 0.08);
    satelliteGroup.add(serviceModule);

    // Radiateurs thermiques (panneaux blancs verticaux)
    const radiatorGeometry = new THREE.BoxGeometry(0.05, 0.006, 0.08);
    const radiatorMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff, // Blanc pur pour les radiateurs
      shininess: 60,
      specular: 0x111111
    });
    
    // Radiateurs gauche et droite
    const leftRadiator = new THREE.Mesh(radiatorGeometry, radiatorMaterial);
    leftRadiator.position.set(-0.05, 0, 0);
    leftRadiator.rotation.z = Math.PI / 2;
    satelliteGroup.add(leftRadiator);
    
    const rightRadiator = new THREE.Mesh(radiatorGeometry, radiatorMaterial);
    rightRadiator.position.set(0.05, 0, 0);
    rightRadiator.rotation.z = Math.PI / 2;
    satelliteGroup.add(rightRadiator);

    // Panneaux solaires professionnels (encore plus compacts)
    const solarArrayGeometry = new THREE.BoxGeometry(0.18, 0.005, 0.08);
    const solarArrayMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a1a4a, // Bleu sombre pour cellules photovoltaïques
      shininess: 120,
      specular: 0x2a2a6a
    });
    
    // Structure de support des panneaux
    const solarSupportGeometry = new THREE.BoxGeometry(0.06, 0.005, 0.01);
    const solarSupportMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x888888,
      shininess: 100
    });
    
    // Panneaux solaires gauche avec support
    const leftSolarSupport = new THREE.Mesh(solarSupportGeometry, solarSupportMaterial);
    leftSolarSupport.position.set(-0.11, 0, 0);
    satelliteGroup.add(leftSolarSupport);
    
    const leftSolarArray = new THREE.Mesh(solarArrayGeometry, solarArrayMaterial);
    leftSolarArray.position.set(-0.14, 0, 0);
    satelliteGroup.add(leftSolarArray);
    
    // Panneaux solaires droite avec support
    const rightSolarSupport = new THREE.Mesh(solarSupportGeometry, solarSupportMaterial);
    rightSolarSupport.position.set(0.11, 0, 0);
    satelliteGroup.add(rightSolarSupport);
    
    const rightSolarArray = new THREE.Mesh(solarArrayGeometry, solarArrayMaterial);
    rightSolarArray.position.set(0.14, 0, 0);
    satelliteGroup.add(rightSolarArray);

    // Antenne parabolique principale
    const dishGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.002, 24);
    const dishMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xeeeeee,
      shininess: 150,
      specular: 0x333333
    });
    const mainDish = new THREE.Mesh(dishGeometry, dishMaterial);
    mainDish.position.set(0, 0.055, -0.02);
    mainDish.rotation.x = -Math.PI / 6;
    satelliteGroup.add(mainDish);

    // Mât d'antenne
    const antennaMastGeometry = new THREE.CylinderGeometry(0.001, 0.001, 0.03);
    const antennaMastMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xaaaaaa,
      shininess: 200
    });
    const antennaMast = new THREE.Mesh(antennaMastGeometry, antennaMastMaterial);
    antennaMast.position.set(0, 0.04, -0.02);
    satelliteGroup.add(antennaMast);

    // Antennes de communication (multiples)
    const commAntennaGeometry = new THREE.CylinderGeometry(0.0008, 0.0008, 0.025);
    
    // Plusieurs antennes de communication
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const commAntenna = new THREE.Mesh(commAntennaGeometry, antennaMastMaterial);
      commAntenna.position.set(
        Math.cos(angle) * 0.025, 
        0.065, 
        Math.sin(angle) * 0.025
      );
      commAntenna.rotation.z = Math.sin(angle) * 0.3;
      satelliteGroup.add(commAntenna);
    }

    // Capteurs et instruments scientifiques
    const sensorGeometry = new THREE.BoxGeometry(0.008, 0.008, 0.012);
    const sensorMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x333333, // Noir pour les capteurs
      shininess: 50
    });
    
    // Capteurs sur le module principal
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const sensor = new THREE.Mesh(sensorGeometry, sensorMaterial);
      sensor.position.set(
        Math.cos(angle) * 0.035, 
        0.02, 
        Math.sin(angle) * 0.035
      );
      satelliteGroup.add(sensor);
    }

    // Lumières de navigation (LED rouges/vertes)
    const navLightGeometry = new THREE.SphereGeometry(0.002, 8, 8);
    const redLightMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff0000,
      transparent: true,
      opacity: 0.8
    });
    const greenLightMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00,
      transparent: true,
      opacity: 0.8
    });
    
    const redNavLight = new THREE.Mesh(navLightGeometry, redLightMaterial);
    redNavLight.position.set(-0.04, 0, 0.06);
    satelliteGroup.add(redNavLight);
    
    const greenNavLight = new THREE.Mesh(navLightGeometry, greenLightMaterial);
    greenNavLight.position.set(0.04, 0, 0.06);
    satelliteGroup.add(greenNavLight);

    // Position initiale du satellite en orbite (plus proche)
    const orbitRadius = 2.8; // Plus proche de la Terre
    satelliteGroup.position.set(orbitRadius, 0, 0);
    scene.add(satelliteGroup);
    satelliteRef.current = satelliteGroup;

    // Création de la traînée moderne (ligne fluide)
    const maxTrailPoints = 40;
    const trailGeometry = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(maxTrailPoints * 3);
    const trailColors = new Float32Array(maxTrailPoints * 3);
    
    // Initialiser les positions et couleurs avec dégradé
    for (let i = 0; i < maxTrailPoints; i++) {
      trailPositions[i * 3] = orbitRadius;
      trailPositions[i * 3 + 1] = 0;
      trailPositions[i * 3 + 2] = 0;
      
      // Dégradé blanc vers transparent
      const alpha = i / maxTrailPoints;
      trailColors[i * 3] = 1.0;     // R
      trailColors[i * 3 + 1] = 1.0; // G  
      trailColors[i * 3 + 2] = 1.0; // B
    }
    
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailGeometry.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));
    
    // Matériau ligne moderne avec dégradé
    const trailMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      linewidth: 3,
      blending: THREE.AdditiveBlending
    });
    
    const trailLine = new THREE.Line(trailGeometry, trailMaterial);
    scene.add(trailLine);
    satelliteTrailRef.current = trailLine;

    // Étoiles statiques
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02, transparent: true, opacity: 0.6 });
    const starsVertices = [];
    for (let i = 0; i < 1500; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    starsRef.current = stars;

    // Éclairage renforcé pour une Terre plus claire et visible
    scene.add(new THREE.AmbientLight(0x808080, 1.2)); // Lumière ambiante plus forte
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5); // Lumière directionnelle plus intense
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Caméra - Position pour avoir la Terre coupée à droite comme SpaceX
    camera.position.set(-15, 0, 0);
    camera.lookAt(0, 0, 0);

    // Contrôles utilisateur
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.8;
    controls.minDistance = 2.5;
    controls.maxDistance = 20;
    controls.enablePan = false;
    controls.autoRotate = false;
    controls.enabled = false; // Désactivé jusqu'au clic "Explorer"

    // Points rouges plus petits et collés à la Terre
    const poisGroup = new THREE.Group();
    const poiGeometry = new THREE.SphereGeometry(0.04, 12, 12);
    const poiMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff0000
    });

    pois.forEach((poi, index) => {
      // Point rouge petit et collé à la surface
      const mesh = new THREE.Mesh(poiGeometry, poiMaterial.clone());
      const position = latLonToVector3(poi.lat, poi.lon, earthRadius + 0.05);
      mesh.position.copy(position);
      mesh.userData = { 
        route: poi.route, 
        id: poi.id, 
        label: poi.label,
        isClickable: true,
        originalPosition: position.clone()
      };

      // Label moderne au-dessus du point
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 200;
      canvas.height = 40;
      
      // Fond transparent
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Texte blanc moderne avec ombre
      context.shadowColor = 'rgba(0, 0, 0, 0.8)';
      context.shadowBlur = 4;
      context.shadowOffsetX = 2;
      context.shadowOffsetY = 2;
      context.fillStyle = '#ffffff';
      context.font = 'bold 14px "SF Pro Display", "Helvetica Neue", Arial, sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(poi.label, canvas.width / 2, canvas.height / 2);
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        alphaTest: 0.1
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      
      // Position au-dessus du point
      const labelPosition = position.clone().normalize().multiplyScalar(earthRadius + 0.3);
      sprite.position.copy(labelPosition);
      sprite.scale.set(1, 0.25, 1);
      sprite.userData = { 
        isLabel: true, 
        parentPoi: poi.id,
        originalPosition: labelPosition.clone()
      };

      poisGroup.add(mesh);
      poisGroup.add(sprite);
    });

    scene.add(poisGroup);
    poisGroupRef.current = poisGroup;


    // Animation avec satellite trajectoire organique et traînée fluide
    let frameCount = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frameCount++;
      
      // Animation du satellite avec trajectoire organique
      if (satelliteRef.current && 
          satelliteTrailRef.current && 
          satelliteTrailRef.current.geometry &&
          satelliteTrailRef.current.geometry.attributes) {
        const time = Date.now() * 0.0006; // Vitesse de base
        noiseTime.current += 0.01; // Temps pour le bruit
        
        const baseOrbitRadius = 2.8;
        
        // Trajectoire de base circulaire
        const baseX = Math.cos(time) * baseOrbitRadius;
        const baseZ = Math.sin(time) * baseOrbitRadius;
        const baseY = 0;
        
        // Ajout de variations organiques avec bruit 3D
        const noiseScale = 0.3; // Intensité des variations
        const noiseX = noise3D(noiseTime.current, 0, 0) * noiseScale;
        const noiseY = noise3D(0, noiseTime.current, 0) * noiseScale * 0.5; // Moins de variation verticale
        const noiseZ = noise3D(0, 0, noiseTime.current) * noiseScale;
        
        // Variation du rayon d'orbite
        const radiusNoise = noise3D(noiseTime.current * 0.3, 0, 0) * 0.4;
        const finalRadius = baseOrbitRadius + radiusNoise;
        
        // Position finale avec bruit
        const finalX = (baseX * finalRadius / baseOrbitRadius) + noiseX;
        const finalY = baseY + noiseY;
        const finalZ = (baseZ * finalRadius / baseOrbitRadius) + noiseZ;
        
        satelliteRef.current.position.set(finalX, finalY, finalZ);
        
        // Rotation du satellite plus complexe
        satelliteRef.current.rotation.y = time * 0.7 + noiseX;
        satelliteRef.current.rotation.z = Math.sin(time * 0.3) * 0.1;
        
        // Le satellite regarde vers la Terre avec légère variation
        const lookTarget = new THREE.Vector3(
          noiseX * 0.1, 
          noiseY * 0.1, 
          noiseZ * 0.1
        );
        satelliteRef.current.lookAt(lookTarget);
        
        // Mise à jour de la traînée toutes les 2 frames
        if (frameCount % 2 === 0 && satelliteTrailRef.current) {
          const trailGeometry = satelliteTrailRef.current.geometry;
          
          // Vérifications de sécurité
          if (trailGeometry && 
              trailGeometry.attributes && 
              trailGeometry.attributes.position && 
              trailGeometry.attributes.color &&
              trailGeometry.attributes.position.array &&
              trailGeometry.attributes.color.array) {
            
            const positions = trailGeometry.attributes.position.array;
            const colors = trailGeometry.attributes.color.array;
            
            // Décaler toutes les positions existantes
            for (let i = positions.length - 3; i >= 3; i -= 3) {
              positions[i] = positions[i - 3];
              positions[i + 1] = positions[i - 2];
              positions[i + 2] = positions[i - 1];
            }
            
            // Mettre à jour les couleurs avec dégradé
            const numPoints = positions.length / 3;
            for (let i = 0; i < numPoints; i++) {
              const alpha = 1 - (i / numPoints); // Dégradé d'opacité
              const intensity = alpha * alpha; // Courbe quadratique pour effet plus naturel
              
              colors[i * 3] = intensity;     // R
              colors[i * 3 + 1] = intensity; // G
              colors[i * 3 + 2] = intensity; // B
            }
            
            // Ajouter la nouvelle position du satellite
            positions[0] = finalX;
            positions[1] = finalY;
            positions[2] = finalZ;
            
            // Marquer les attributs comme modifiés
            trailGeometry.attributes.position.needsUpdate = true;
            trailGeometry.attributes.color.needsUpdate = true;
          }
        }
        
        // Animation des lumières de navigation (clignotement professionnel)
        const redNavLight = satelliteRef.current.children.find(child => 
          child.material && child.material.color && child.material.color.getHex() === 0xff0000
        );
        const greenNavLight = satelliteRef.current.children.find(child => 
          child.material && child.material.color && child.material.color.getHex() === 0x00ff00
        );
        
        if (redNavLight) {
          // Clignotement rouge lent et régulier (feu de position)
          redNavLight.material.opacity = Math.sin(time * 3) > 0 ? 0.9 : 0.2;
        }
        
        if (greenNavLight) {
          // Clignotement vert décalé (feu tribord)
          greenNavLight.material.opacity = Math.sin(time * 3 + Math.PI) > 0 ? 0.9 : 0.2;
        }
        
        // Rotation des panneaux solaires pour suivre le soleil (réalisme)
        const leftSolarArray = satelliteRef.current.children.find(child => 
          child.position.x < -0.13 && child.geometry && child.geometry.type === 'BoxGeometry'
        );
        const rightSolarArray = satelliteRef.current.children.find(child => 
          child.position.x > 0.13 && child.geometry && child.geometry.type === 'BoxGeometry'
        );
        
        if (leftSolarArray) {
          leftSolarArray.rotation.y = Math.sin(time * 0.5) * 0.3;
        }
        if (rightSolarArray) {
          rightSolarArray.rotation.y = Math.sin(time * 0.5) * 0.3;
        }
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Variable pour contrôler l'état d'exploration
    let isExploreMode = false;

    // Fonction de zoom vers la Terre (accessible globalement)
    window.earthZoom = () => {
      // Activer le mode exploration
      isExploreMode = true;
      controls.enabled = true;
      
      // Animation fluide vers la Terre - zoom un peu moins serré
      const targetPosition = { x: 0, y: 0, z: 5.5 };
      const startPosition = { ...camera.position };
      const duration = 2000;
      const startTime = Date.now();
      
      const animateZoom = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Interpolation fluide (easeOutCubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        camera.position.x = startPosition.x + (targetPosition.x - startPosition.x) * easeProgress;
        camera.position.y = startPosition.y + (targetPosition.y - startPosition.y) * easeProgress;
        camera.position.z = startPosition.z + (targetPosition.z - startPosition.z) * easeProgress;
        
        camera.lookAt(0, 0, 0);
        
        if (progress < 1) {
          requestAnimationFrame(animateZoom);
        } else {
          // Masquer les éléments UI après le zoom
          const heroContent = document.querySelector('.hero-content');
          const missionInstructions = document.querySelector('.mission-instructions');
          const spacexHeader = document.querySelector('.spacex-header');
          if (heroContent) heroContent.style.display = 'none';
          if (missionInstructions) missionInstructions.style.display = 'none';
          if (spacexHeader) spacexHeader.style.display = 'none';
        }
        
        controls.update();
        renderer.render(scene, camera);
      };
      
      animateZoom();
    };

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Raycasting click - SEULEMENT APRÈS EXPLORER
    const handleClick = (event) => {
      // Ne rien faire si pas en mode exploration
      if (!isExploreMode) return;

      // Éviter les clics accidentels après un drag
      const dx = Math.abs(event.clientX - pointerDownPosRef.current.x);
      const dy = Math.abs(event.clientY - pointerDownPosRef.current.y);
      if (dx > 4 || dy > 4) return;

      const rect = renderer.domElement.getBoundingClientRect();
      pointerRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = raycasterRef.current;
      raycaster.setFromCamera(pointerRef.current, camera);

      // Détection clic sur les points - SEULEMENT EN MODE EXPLORATION et visibles
      const poiMeshes = poisGroupRef.current.children.filter(m => 
        m.type === 'Mesh' && 
        m.userData.isClickable
      );

      // Tous les points sont cliquables en mode exploration
      const intersectsPoi = raycaster.intersectObjects(poiMeshes, false);
      
      if (intersectsPoi.length > 0) {
        const hitObject = intersectsPoi[0].object;
        const route = hitObject.userData?.route;
        const poiId = hitObject.userData?.id;
        
        if (route) {
          console.log('Navigation vers:', route);
          navigate(route);
        }
      }
    };

    const handlePointerMove = (event) => {
      // Effets hover SEULEMENT en mode exploration
      if (!isExploreMode) {
        renderer.domElement.style.cursor = 'default';
        return;
      }

      const rect = renderer.domElement.getBoundingClientRect();
      pointerRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      const raycaster = raycasterRef.current;
      raycaster.setFromCamera(pointerRef.current, camera);
      
      // Filtrer pour ne montrer que les points visibles (pas ceux derrière la Terre)
      const poiMeshes = poisGroupRef.current.children.filter(m => 
        m.type === 'Mesh' && 
        m.userData.isClickable
      );

      // Tous les points sont hover-ables en mode exploration
      const intersects = raycaster.intersectObjects(poiMeshes, false);
      
      // Effet hover simple pour petits points
      poiMeshes.forEach(m => {
        m.scale.set(1, 1, 1);
      });
      
      if (intersects.length > 0) {
        intersects[0].object.scale.set(2, 2, 2);
        renderer.domElement.style.cursor = 'pointer';
      } else {
        renderer.domElement.style.cursor = 'default';
      }

      // Tous les labels sont visibles en mode exploration
      poisGroupRef.current.children.forEach(child => {
        if (child.userData.isLabel) {
          child.visible = true;
        }
      });
    };

    const handlePointerDown = (event) => {
      isPointerDownRef.current = true;
      pointerDownPosRef.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerUp = () => {
      isPointerDownRef.current = false;
    };

    renderer.domElement.addEventListener('click', handleClick);
    renderer.domElement.addEventListener('pointermove', handlePointerMove);
    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('click', handleClick);
      renderer.domElement.removeEventListener('pointermove', handlePointerMove);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="space-planet-container">
      <div ref={mountRef} className="three-canvas" />
      <div className="space-overlay">
        <div className="space-hud">
          {/* Header Navigation SpaceX Style */}
          <header className="spacex-header">
            <div className="logo-section">
              <h1 className="brand-name">MOREAU Sacha</h1>
              <span className="tagline">PORTFOLIO STAGE 2025</span>
            </div>
            <nav className="main-nav">
              <a href="/entreprise" className="nav-link">ENTREPRISE</a>
              <a href="/articles" className="nav-link">ARTICLES</a>
              <a href="/contact" className="nav-link">CONTACT</a>
            </nav>
          </header>

          {/* Hero Section avec Terre à droite */}
          <div className="hero-content">
            <div className="hero-left">
              <h2 className="hero-title">PORTFOLIO<br/>STAGE 2025</h2>
              <p className="hero-subtitle">
              Découvrez mon expérience chez ACRI-ST : un stage axé sur le développement logiciel et l’analyse de données liées à l’observation de la Terre.
              </p>
              <button 
                className="explore-btn"
                onClick={() => window.earthZoom && window.earthZoom()}
              >
                EXPLORER LA MISSION
              </button>
            </div>
          </div>

          {/* Instructions discrètes */}
          <div className="mission-instructions">
            <span>CLIQUEZ SUR "EXPLORER" PUIS SUR LES POINTS ROUGES</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SpacePlanet; 