import React, { Component } from 'react';
import axios from 'axios';
import {Container, Card, Col, Row, Form, Button, FloatingLabel} from "react-bootstrap";
import GroupTable from "../components/group/GroupTable";
import StatsBar from '../components/StatsBar';
import TagsBar from "../components/tag/TagsBar";
import DateRangePicker from "react-bootstrap-daterangepicker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

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
    axios.get('/api/v1/source')
        .then(res => {
          const sources = res.data;
          this.setState({ sources });
        })
        .catch(err => {
          console.error("Server did not return sources. Check your connection to the internet.")
        })
  }
  getGroups = () => {
    axios.get('/api/v1/group')
        .then(res => {
          const groups = res.data;
          this.setState({ groups });
        })
        .catch(err => {
          console.error("Server did not return groups. Check your connection to the internet.")
        })
  }
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
  getUsers = () => {
    axios.get('/api/v1/user')
        .then(res => {
          const users = res.data;
          this.setState({ users });
        })
        .catch(err => {
          console.error("Server did not return users. Check your connection to the internet.")
        })
  }


  render() {
    let sources: Source[] | [];
    sources = this.state.sources;
    let groups: Group[] | null;
    if (this.state.groups) {
      groups = this.state.groups.results;
    } else {
      groups = [];
    }
    let tags: Tag[] | null;
    tags = this.state.tags;
    let users: User[] | null;
    users = this.state.users;

    return (
      <div className="App" >
        <Container fluid>
          <Row>
            <Col>
              <div className="d-none d-xl-block">
                <TagsBar tags={tags}></TagsBar>
              </div>
            </Col>
            <Col xl={9}>
              <Card className="mb-4">
                <Container fluid>
                  <Row className="g-2">
                    <Col md>
                      <FloatingLabel controlId="floatingInputGrid" label="Keywords">
                        <Form.Control placeholder="Keywords" />
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                        <Form.Control placeholder="Author" />
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                        <Form.Control placeholder="Tags" />
                      </FloatingLabel>
                    </Col>
                  </Row>
                </Container>
              </Card>
              <GroupTable visibleGroups={groups} sources={sources} tags={tags}></GroupTable>
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

export default GroupsIndex;
