import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import './ContactSatellite.css';

const ContactSatellite = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const satelliteRef = useRef(null);
  const earthRef = useRef(null);
  const navigate = useNavigate();
  const [showWebInterface, setShowWebInterface] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fonction de bruit pour trajectoire organique
  const noise3D = (x, y, z) => {
    return (Math.sin(x * 2.1) * Math.cos(y * 1.7) * Math.sin(z * 1.3) + 
            Math.cos(x * 1.5) * Math.sin(y * 2.3) * Math.cos(z * 1.9)) * 0.5;
  };

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Scène, caméra, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    
    // Fond spatial avec transition
    scene.background = new THREE.Color(0x000012);
    renderer.setClearColor(0x000012, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Terre réaliste en arrière-plan
    const earthGeometry = new THREE.SphereGeometry(1.8, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x6B93D6,
      shininess: 30,
    });
    
    // Chargement texture Terre
    const loader = new THREE.TextureLoader();
    loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg', 
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        earthMaterial.map = texture;
        earthMaterial.needsUpdate = true;
      }
    );
    
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.position.set(0, 0, -15);
    scene.add(earthMesh);
    earthRef.current = earthMesh;

    // Étoiles pour ambiance spatiale
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.015, 
      transparent: true, 
      opacity: 0.8 
    });
    const starsVertices = [];
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // SATELLITE avec taille normale au début
    const satelliteGroup = new THREE.Group();
    
    // Taille normale du satellite (sera agrandi dynamiquement)
    const scale = 1;
    
    // Module central principal (GÉANT)
    const mainModuleGeometry = new THREE.CylinderGeometry(0.03 * scale, 0.03 * scale, 0.1 * scale, 16);
    const mainModuleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf0f0f0,
      shininess: 100,
      specular: 0x444444,
      reflectivity: 0.3
    });
    const mainModule = new THREE.Mesh(mainModuleGeometry, mainModuleMaterial);
    satelliteGroup.add(mainModule);

    // Module de service
    const serviceModuleGeometry = new THREE.CylinderGeometry(0.025 * scale, 0.025 * scale, 0.07 * scale, 12);
    const serviceModuleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xd0d0d0,
      shininess: 120,
      specular: 0x333333
    });
    const serviceModule = new THREE.Mesh(serviceModuleGeometry, serviceModuleMaterial);
    serviceModule.position.set(0, 0, 0.08 * scale);
    satelliteGroup.add(serviceModule);

    // Panneaux solaires GÉANTS
    const solarArrayGeometry = new THREE.BoxGeometry(0.18 * scale, 0.005 * scale, 0.08 * scale);
    const solarArrayMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a1a4a,
      shininess: 150,
      specular: 0x3a3a6a
    });
    
    const leftSolarArray = new THREE.Mesh(solarArrayGeometry, solarArrayMaterial);
    leftSolarArray.position.set(-0.14 * scale, 0, 0);
    satelliteGroup.add(leftSolarArray);
    
    const rightSolarArray = new THREE.Mesh(solarArrayGeometry, solarArrayMaterial);
    rightSolarArray.position.set(0.14 * scale, 0, 0);
    satelliteGroup.add(rightSolarArray);

    // Antenne parabolique principale
    const dishGeometry = new THREE.CylinderGeometry(0.02 * scale, 0.02 * scale, 0.002 * scale, 24);
    const dishMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xeeeeee,
      shininess: 200,
      specular: 0x444444
    });
    const mainDish = new THREE.Mesh(dishGeometry, dishMaterial);
    mainDish.position.set(0, 0.055 * scale, -0.02 * scale);
    mainDish.rotation.x = -Math.PI / 6;
    satelliteGroup.add(mainDish);

    // Lumières de navigation brillantes
    const navLightGeometry = new THREE.SphereGeometry(0.002 * scale, 8, 8);
    const redLightMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff0000,
      transparent: true,
      opacity: 1
    });
    const greenLightMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00,
      transparent: true,
      opacity: 1
    });
    
    const redNavLight = new THREE.Mesh(navLightGeometry, redLightMaterial);
    redNavLight.position.set(-0.04 * scale, 0, 0.06 * scale);
    satelliteGroup.add(redNavLight);
    
    const greenNavLight = new THREE.Mesh(navLightGeometry, greenLightMaterial);
    greenNavLight.position.set(0.04 * scale, 0, 0.06 * scale);
    satelliteGroup.add(greenNavLight);

    // Position du satellite : en orbite autour de la Terre
    satelliteGroup.position.set(3, 1, -10);
    satelliteGroup.rotation.set(0.1, 0, 0.05);
    scene.add(satelliteGroup);
    satelliteRef.current = satelliteGroup;

    // Éclairage pour l'espace
    scene.add(new THREE.AmbientLight(0x404040, 0.8));
    
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(10, 5, 5);
    scene.add(sunLight);
    
    const earthLight = new THREE.DirectionalLight(0x6691ff, 0.6);
    earthLight.position.set(-5, 2, -8);
    scene.add(earthLight);

    // Position initiale de la caméra : vue de l'espace
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, -10);

    // ANIMATION SIMPLE D'ORBITE
    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      
      if (satelliteRef.current && earthRef.current) {
        // Orbite simple du satellite autour de la Terre
        const orbitRadius = 3;
        const orbitSpeed = 0.5;
        
        satelliteRef.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius;
        satelliteRef.current.position.y = 1 + Math.sin(time * orbitSpeed * 0.3) * 0.5;
        satelliteRef.current.position.z = -10 + Math.sin(time * orbitSpeed) * orbitRadius;
        
        // Rotation du satellite
        satelliteRef.current.rotation.y += 0.01;
        
        // La Terre tourne lentement
        earthRef.current.rotation.y += 0.005;
        
        // Animation des lumières de navigation
        const redNavLight = satelliteRef.current.children.find(child => 
          child.material && child.material.color && child.material.color.getHex() === 0xff0000
        );
        const greenNavLight = satelliteRef.current.children.find(child => 
          child.material && child.material.color && child.material.color.getHex() === 0x00ff00
        );
        
        if (redNavLight) {
          redNavLight.material.opacity = Math.sin(time * 3) > 0 ? 1 : 0.3;
        }
        if (greenNavLight) {
          greenNavLight.material.opacity = Math.sin(time * 3 + Math.PI) > 0 ? 1 : 0.3;
        }
      }
      
      renderer.render(scene, camera);
    };
    animate();


    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="contact-satellite">
      {/* Canvas 3D pour l'animation */}
      <div ref={mountRef} className="satellite-canvas" />
      
      {/* Bouton retour (toujours visible) */}
      <button 
        className="back-button"
        onClick={() => navigate('/')}
      >
        ← Retour
      </button>
      
      
      {/* Interface web à l'intérieur de la capsule */}
      {showWebInterface && (
        <div className="capsule-interior">
          <div className="capsule-header">
            <h1>MOREAU Sacha</h1>
            <div className="capsule-subtitle">
              Créons quelque chose d'extraordinaire ensemble
            </div>
          </div>
          
          <div className="contact-dashboard">
            
            {/* Section principale avec 2 colonnes SpaceX style */}
            <div className="spacex-main-grid">
              
              {/* Colonne gauche - Informations */}
              <div className="contact-info-column">
                <div className="info-section">
                  <h2>Mes coordonnées</h2>
                  <p className="info-description">
                    Vous pouvez me contacter via les méthodes ci-dessous ou via le formulaire ci-dessous.     
                    Je vous répondrai rapidement.
                  </p>
                </div>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📧</div>
                    <div className="method-content">
                      <h3>Email</h3>
                      <a href="mailto:moreau_sacha@yahoo.fr">moreau_sacha@yahoo.fr</a>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">📱</div>
                    <div className="method-content">
                      <h3>Téléphone</h3>
                      <a href="tel:+33669250510">+33 6 69 25 05 10</a>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">💼</div>
                    <div className="method-content">
                      <h3>LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/sacha-moreau-351984332" target="_blank" rel="noopener noreferrer">
                        Sacha MOREAU
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">💻</div>
                    <div className="method-content">
                      <h3>GitHub</h3>
                      <a href="https://github.com/tayz777" target="_blank" rel="noopener noreferrer">
                        @tayz777
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Colonne droite - Formulaire */}
              <div className="contact-form-column">
                <div className="form-container">
                  <h2>Envoyez-moi un message</h2>
                  <form className="spacex-form" onSubmit={handleSubmit}>
                    {submitStatus === 'success' && (
                      <div className="success-message">
                        ✅ Message envoyé avec succès ! Je vous répondrai rapidement.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="error-message">
                        ❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                      </div>
                    )}
                    
                    <div className="form-row">
                      <div className="form-field">
                        <label>Prénom *</label>
                        <input 
                          type="text" 
                          name="firstName"
                          placeholder="Votre prénom" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="form-field">
                        <label>Nom *</label>
                        <input 
                          type="text" 
                          name="lastName"
                          placeholder="Votre nom" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-field">
                      <label>Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="votre.email@exemple.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-field">
                      <label>Entreprise</label>
                      <input 
                        type="text" 
                        name="company"
                        placeholder="Nom de votre entreprise (optionnel)" 
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="form-field">
                      <label>Sujet *</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="emploi">Opportunité d'emploi</option>
                        <option value="projet">Projet freelance</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div className="form-field">
                      <label>Message *</label>
                      <textarea 
                        name="message"
                        placeholder="Décrivez votre projet ou votre demande..."
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="spacex-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Footer de la capsule */}
          <div className="capsule-footer">
            <div className="system-status">
              <span>© 2025 Sacha MOREAU - Développeur Web Full-Stack</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSatellite;
