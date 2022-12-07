// Please do not change the name of this function
//{ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 }
function getTweetData (tweet) {
  const tags = tweet.match(/(\#\S+)/g)
  const mentions = tweet.match(/(\@\S+)/g)
  const output = {
    tags: tags ? tags : [], 
    mentions: mentions ? mentions: [], 
    tagCount: tags ? tags.length : 0, 
    mentionCount: mentions ? mentions.length : 0, 
    length: tweet.length 
  }
  console.log(output)
  return output
};

module.exports = getTweetData;
