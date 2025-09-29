// Fonctions utilitaires

// Formatage de date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Validation d'email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Truncate text
export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Génération d'ID unique
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Gestion des erreurs
export const handleError = (error) => {
  console.error('Erreur:', error);
  return {
    message: error.response?.data?.message || 'Une erreur est survenue',
    status: error.response?.status || 500
  };
}; 