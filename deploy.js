const ghpages = require('gh-pages');

console.log('--->deploying app...');
ghpages.publish('dist', function(err) {
  console.log('--->done.');
});
