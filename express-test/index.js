const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/v1/source', (req,res) => {
  var sources = [{
    "enabled": true,
    "unreadErrorCount": 3,
    "tags": [],
    "_id": "601cc24b8077511e0ec93e37",
    "media": "crowdtangle",
    "nickname": "CT",
    "user": {
      "_id": "601cbd2380c78f3e9459fd73",
      "username": "admin"
    },
    "__v": 7,
    "lastReportDate": "2021-03-14T20:32:11.000Z"
  },
    {
      "enabled": false,
      "unreadErrorCount": 186,
      "tags": [
        "democrats",
        "bernie",
        "zebra"
      ],
      "_id": "601cbeeb3a16033ebb8b2115",
      "media": "twitter",
      "nickname": "Sample",
      "keywords": "democrats, bernie, zebra",
      "user": {
        "_id": "601cbd2380c78f3e9459fd73",
        "username": "admin"
      },
      "__v": 236
    }];
  res.json(sources);
  console.log('Sent list of sources');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);