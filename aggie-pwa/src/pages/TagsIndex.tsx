import React, { Component } from 'react';
import axios from 'axios';
import {Container, Col, Row} from "react-bootstrap";
import StatsBar from '../components/StatsBar';
import TagTable from "../components/tag/TagTable";

interface IProps {
}

interface IState {
  tags: Tag[] | [];
}

class TagsIndex extends Component<IProps, IState> {
  // Initialize the state
  constructor(props: IProps){
    super(props);
    this.state = {
      tags: [],
    }
  }

  // Fetch the sources on first mount.
  componentDidMount() {
    this.getTags();
  }

  // Retrieves the list of sources from the Express app
  getTags = () => {
    axios.get('/api/v1/tag')
        .then(res => {
          const tags = res.data;
          this.setState({ tags });
        })
        .catch(err => {
          console.error("Server did not return tags. Check your connection to the internet.")
        })
  }

  render() {
    let tags: Tag[] | [];
    tags = this.state.tags;

    return (
        <div className="App" >
          <Container fluid>
            <Row>
              <Col>
              </Col>
              <Col xl={9}>
                <TagTable tags={tags}></TagTable>
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

export default TagsIndex;
