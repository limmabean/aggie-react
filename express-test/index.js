const express = require('express');
const path = require('path');
const exampleReports = require('./example-reports.json');
const exampleIncidents = require('./example-incidents.json');
const exampleSources = require('./example-sources.json');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/v1/source', (req,res) => {
  const sources = exampleSources;
  res.json(sources)
  console.log('Sent list of sources');
});

// An api endpoint that returns a short list of items
app.get('/api/v1/report?page=0', (req,res) => {
  const reports = exampleReports;
  res.json(reports);
  console.log('Sent list of reports');
});

app.get('/api/v1/incident', (req,res) => {
  const incidents = exampleIncidents;
  res.json(incidents);
  console.log('Sent list of incidents');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
