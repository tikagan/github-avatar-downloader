var request = require('request')
var fs = require('fs')

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
      cb(err)
      return
    }
    if (response && response.statusCode === 200) {
      let json = JSON.parse(body)
      parseJSON(json)
    }
  })
}



function parseJSON(json) {
  json.forEach(function (avatarURL){
    let filePath = "./avatars/" + avatarURL.login + ".jpg"
    let url = avatarURL.avatar_url
    downloadImageByURL(url, filePath)
  })
}


function downloadImageByURL (url, filePath) {
  request.get(url)
       .pipe(fs.createWriteStream(filePath))
}

// function getJSON(err, response, body){
//     if (err) {
//       console.log("Error: ", err)
//       return
//     }
//     if (response && response.statusCode === 200) {
//       let json = JSON.parse(body)
//       console.log("getJSON: ", typeof json)
//       return json
//     }
//   }
getRepoContributors(process.argv[2], process.argv[3], function(err, result){
    console.log("Errors:", err)
    // console.log("Result:", result)
})
// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err)
//   // console.log("Result:", result)