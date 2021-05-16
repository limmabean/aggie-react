import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class IncidentsIndex extends Component {
  // Initialize the state
  // @ts-ignore
  constructor(props){
    super(props);
    this.state = {
      sources: [],
      incidents: [],
      users: [],
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getSources();
    this.getIncidents();
    this.getUsers();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/v1/source')
        .then(res => res.json())
        .then(list => this.setState({ list }))
  }
  get

  render() {
    // @ts-ignore
    const { list } = this.state;

    // @ts-ignore
    return (
        <div className="App">
          <h1>List of Items</h1>
          {/* Check to see if any items are found*/}
          {list.length ? (
              <div>
                <p>
                  {list[0].nickname}
                </p>
              </div>
          ) : (
              <div>
                <h2>No List Items Found</h2>
              </div>
          )
          }
        </div>
    );
  }
}

export default IncidentsIndex;