import React, { Component } from 'react';
import axios from 'axios';
import {Container, Card, Col, Row, Form} from "react-bootstrap";
import GroupTable from "../components/GroupTable";
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
    axios.get('/api/v1/group').then(res => {
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
                  <Form>
                    <Form.Row className="pt-2">
                      <Col>
                        <Form.Control placeholder="ID" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Title" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Tags" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Location" />
                      </Col>
                    </Form.Row>
                    <Form.Row className="pt-2">
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                          <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                          <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                          <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                          <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                          <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </Form>
                </Container>
              </Card>
              {groups && groups.length > 0 &&
                <GroupTable visibleGroups={groups} sources={sources} tags={tags}></GroupTable>
              }
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
