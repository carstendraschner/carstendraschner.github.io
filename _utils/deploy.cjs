const ghpages = require('gh-pages');

console.log('Starting to deploy to GitHub Pages');

ghpages.publish(
  '_site',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/carstendraschner/my_website.git',
  },
  function (err) {
    if (err) {
      console.log('Error while deploying: ' + err);
    } else {
        // TODO: add production URL to log here
      console.log('Successfully deployed to <ADD_URL>');
    }
  }
);
