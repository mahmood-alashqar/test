const superagent = require('superagent');
const Art = require('../models/APIdata.model');
async function getAllData(req, res) {
  let allData = [];
  const superAgentApi = `https://api.artic.edu/api/v1/artworks`;
  superagent.get(superAgentApi).then(data => {
    // console.log(data);
    allData = data.body.data.map(dataMap => {
      return new Art(dataMap);
    })
    // console.log('-------------------------------' + allData);

    res.send(allData);
  }).catch(error => {
    console.log('=============');
    console.log('error from getAllData');
    console.log(error);
    console.log('=============');
  })
}
module.exports = getAllData;