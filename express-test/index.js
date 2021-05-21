const express = require('express');
const path = require('path');
const exampleReports = require('./example-reports.json');
const exampleGroups = require('./example-groups.json');
const exampleSources = require('./example-sources.json');
const exampleSession = require('./example-session.json');
const exampleUsers = require('./example-users.json');
const exampleTags = require('./example-tags.json');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/session', (req,res) => {
  const session = exampleSession;
  res.json(session);
  console.log('Sent session');
});

// An api endpoint that returns a short list of items
app.get('/api/v1/user', (req,res) => {
  const users = exampleUsers;
  res.json(users)
  console.log('Sent list of users');
});

// An api endpoint that returns a short list of items
app.get('/api/v1/user/60525f6e67764a0cbd905446', (req,res) => {
  const user = exampleUsers[0];
  res.json(user)
  console.log('Sent user details');
});

// An api endpoint that returns a short list of items
app.get('/api/v1/source', (req,res) => {
  const sources = exampleSources;
  res.json(sources)
  console.log('Sent list of sources');
});

// An api endpoint that returns details for one source
app.get('/api/v1/source/606b31a4bb1d0a5e5138d8bb', (req,res) => {
  const source = exampleSources[0];
  res.json(source)
  console.log('Sent source details');
});

// An api endpoint that returns a short list of items
app.get('/api/v1/tag', (req,res) => {
  const tags = exampleTags;
  res.json(tags)
  console.log('Sent list of tags');
});

// An api endpoint that returns a short list of items
app.get('/api/v1/report?page=0', (req,res) => {
  const reports = exampleReports;
  res.json(reports);
  console.log('Sent list of reports');
});

app.get('/api/v1/group', (req,res) => {
  const groups = exampleGroups;
  res.json(groups);
  console.log('Sent list of groups');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);
