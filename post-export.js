// post-export.js
// copy _redirects file to ./out folder
const fs = require('fs');
// destination.txt will be created or overwritten by default.
fs.copyFile('_redirects', './out/_redirects', (err) => {
  if (err) throw err;
  console.log('_redirects was copied to ./out/_redirects');
});

fs.copyFile('_headers', './out/_headers', (err) => {
  if (err) throw err;
  console.log('_headers was copied to ./out/_headers');
});

// Sitemap Generator
const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'http://www.burnabybluesfestival.com',
  pagesDirectory: `${__dirname}/pages/`,
  targetDirectory: `${__dirname}/out/`,
  nextConfigPath: `${__dirname}/next.config.js`,
  ignoredExtensions: [
    'png',
    'jpg',
  ],
});
