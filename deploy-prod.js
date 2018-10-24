const ghpages = require('gh-pages');

console.log('--->deploying app...');
ghpages.publish('dist', {
  remote: 'pmsp'
}, function (err) {
  console.log('--->done.');
});
