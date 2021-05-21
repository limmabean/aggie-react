import React, { Component } from 'react';
import axios from 'axios';
import {Container, Col, Row} from "react-bootstrap";
import StatsBar from '../components/StatsBar';
import SourceTable from "../components/source/SourceTable";

interface IProps {
}

interface IState {
  sources: Source[] | [];
}

class SourcesIndex extends Component<IProps, IState> {
  // Initialize the state
  constructor(props: IProps){
    super(props);
    this.state = {
      sources: [],
    }
  }

  // Fetch the sources on first mount.
  componentDidMount() {
    this.getSources();
  }

  // Retrieves the list of sources from the Express app
  getSources = () => {
    axios.get('/api/v1/source').then(res => {
      const sources = res.data;
      this.setState({ sources });
    })
  }

  render() {
    let sources: Source[] | [];
    sources = this.state.sources;

    return (
        <div className="App" >
          <Container fluid>
            <Row>
              <Col>
              </Col>
              <Col xl={9}>
                <SourceTable sources={sources}></SourceTable>
              </Col>
              <Col>
                <div className="d-none d-xl-block">
                  <StatsBar></StatsBar>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default SourcesIndex;
