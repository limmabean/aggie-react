import React, { Component } from 'react';
import axios from 'axios';
import GroupTable from "../components/GroupTable";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StatsBar from '../components/StatsBar';
import TagsBar from "../components/TagsBar";

interface IProps {
}

interface IState {
  sources: Source[] | [];
  groups: Groups | null;
  users: User[] | [];
  tags: Tag[] | [];
}

class GroupsIndex extends Component<IProps, IState> {
  // Initialize the state
  constructor(props: IProps){
    super(props);
    this.state = {
      sources: [],
      groups: null,
      users: [],
      tags: [],
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getSources();
    this.getGroups();
    this.getUsers();
    this.getTags();
  }

  // Retrieves the list of items from the Express app
  getSources = () => {
    axios.get('/api/v1/source').then(res => {
      const sources = res.data;
      this.setState({ sources });
    })
  }
  getGroups = () => {
    axios.get('/api/v1/incident').then(res => {
      const groups = res.data;
      this.setState({ groups });
    })
  }
  getUsers = () => {
    axios.get('/api/v1/user').then(res => {
      const users = res.data;
      this.setState({ users });
    })
  }
  getTags = () => {
    axios.get('/api/v1/tag').then(res => {
      const tags = res.data;
      this.setState({ tags });
    })
  }


  render() {
    let sources: Source[] | [];
    sources = this.state.sources;
    let groups: Group[] | null;
    if (this.state.groups) {
      groups = this.state.groups.results;
    } else {
      groups = null
    }
    let tags: Tag[] | null;
    tags = this.state.tags;

    return (
        <div className="App" >

          <Grid container spacing={2}>
            <Grid item xs>
              <TagsBar tags={tags}></TagsBar>
            </Grid>
            <Grid item xs={12} sm={12} lg={9}>
              <Paper>
                {groups && groups.length > 0 &&
                <div>
                  <GroupTable visibleGroups={groups} sources={sources} tags={tags}></GroupTable>
                </div>
                }
              </Paper>
            </Grid>
            <Grid item xs>
              <StatsBar></StatsBar>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default GroupsIndex;
