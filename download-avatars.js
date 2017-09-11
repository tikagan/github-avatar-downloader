var request = require('request')

console.log('Welcome to the GitHub Avatar Downloader!')

const GITHUB_USER = "tikagan"
const GITHUB_TOKEN = "4655bb968fd2bbee949d1985a1155e8c87b75bd6"


function getRepoContributors(repoOwner, repoName, cb) {
  let reqObj = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': GITHUB_USER
    }
  }
  request.get(reqObj, function(err, response, body){
    if (err) {
      console.log("Error: ", err)
      return
    }
    console.log(body)
    return
  })
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err)
  console.log("Result:", result)
});