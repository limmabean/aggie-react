import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Container } from '@material-ui/core';


class ReportsIndex extends Component {
  render() {
    return (
        <div className="">
          <Container maxWidth="lg">
            <Paper>
              <h1>Reports Index Page</h1>
              {/* Link to List.js */}
              <Link to={'./incidents'}>
                <button>
                  My List
                </button>
              </Link>
            </Paper>
          </Container>
        </div>
    );
  }
}
export default ReportsIndex;