const path = require('path');

module.exports = {
  // Configuration pour personnaliser le dossier des pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Extensions de fichiers autorisées
  webpack: (config) => {
    config.resolve.alias['@pages'] = path.join(__dirname, 'id'); // Utilisation du dossier "id"
    return config;
  },
};
