import React, { Component } from 'react';
import axios from 'axios';

interface IProps {
}

interface IState {
  sources: Source[] | [];
  groups: Groups | null;
  tags: Tag[] | [];
}

class ReportsIndex extends Component {
  // Initialize the state
  constructor(props: IProps) {
    super(props);
    this.state = {
      sources: [],
      groups: null,
      tags: [],
    }
  }
  // Fetch the list on first mount
  componentDidMount() {
    this.getSources();
    this.getGroups();
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
  getTags = () => {
    axios.get('/api/v1/tag').then(res => {
      const tags = res.data;
      this.setState({ tags });
    })
  }
  render() {
    return (
      <div className="">
        Reports
      </div>
    );
  }
}
export default ReportsIndex;
