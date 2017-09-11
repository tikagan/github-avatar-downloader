var request = require('request')

console.log('Welcome to the GitHub Avatar Downloader!')

var GITHUB_USER = "tikagan"
var GITHUB_TOKEN = "4655bb968fd2bbee949d1985a1155e8c87b75bd6"

function getRepoContributors(repoOwner, repoName, cb) {
  let requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors'
  console.log('requestURL: ', requestURL)
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err)
  console.log("Result:", result)
});