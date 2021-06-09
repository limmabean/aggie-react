const express = require('express');
const path = require('path');
const exampleReports = require('./example-reports.json');
const exampleBatch = require('./example-batch.json');
const exampleGroups = require('./example-groups.json');
const exampleSources = require('./example-sources.json');
const exampleSession = require('./example-session.json');
const exampleUsers = require('./example-users.json');
const exampleTags = require('./example-tags.json');
const exampleTwitterSettings = require('./example-twitterSettings.json');
const exampleElmoSettings = require('./example-elmoSettings.json');
const exampleGPlacesSettings = require('./example-GPlacesSettings.json');
const exampleCrowdTangleSettings = require('./example-CrowdTangleSettings.json');
const exampleFetching = require('./example-fetching.json');
const exampleEmailSetting = require('./example-emailSetting.json');
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

app.get('/api/v1/group', (req,res) => {
  const groups = exampleGroups;
  res.json(groups);
  console.log('Sent list of groups');
});

// An api endpoint that returns a short list of items
app.get('/api/v1/report', (req,res) => {
  const reports = exampleReports;
  res.json(reports);
  console.log('Sent reports');
});

// An api endpoint that returns a short list of items
app.get('/api/v1/report/batch', (req,res) => {
  const batchReports = exampleBatch;
  res.json(batchReports);
  console.log('Sent batch of reports');
});

/*========================================== API SETTINGS EXAMPLES =============================================*/
app.get('/api/v1/settings/twitter', (req,res) => {
  const twitterSettings = exampleTwitterSettings;
  res.json(twitterSettings);
  console.log('Sent list of twitter settings');
});

app.get('/api/v1/settings/elmo', (req,res) => {
  const elmoSettings = exampleElmoSettings;
  res.json(elmoSettings);
  console.log('Sent list of elmo settings');
});

app.get('/api/v1/settings/gplaces', (req,res) => {
  const gPlacesSettings = exampleGPlacesSettings;
  res.json(gPlacesSettings);
  console.log('Sent list of gPlaces settings');
});

app.get('/api/v1/settings/crowdtangle', (req,res) => {
  const crowdTangleSettings = exampleCrowdTangleSettings;
  res.json(crowdTangleSettings);
  console.log('Sent list of Crowdtangle settings');
});
/*========================================== FETCHING STATUS EXAMPLE =============================================*/
app.get('/api/v1/settings/fetching', (req,res) => {
  const fetching = exampleFetching;
  res.json(fetching);
  console.log('Sent fetching status');
});

/*========================================== AGGIE EMAIL EXAMPLE =============================================*/
app.get('/api/v1/settings/email', (req,res) => {
  const emailSetting = exampleEmailSetting;
  res.json(emailSetting);
  console.log('Sent email settings');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);
