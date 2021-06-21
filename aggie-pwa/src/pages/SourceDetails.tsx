import React, { Component } from 'react';
import {useParams, RouteComponentProps} from 'react-router-dom';
import axios from 'axios';
import {Container, Col, Row, Card, ListGroup, Table, Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";
import StatsBar from '../components/StatsBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from 'react-bootstrap';

type TParams = { id: string };

interface IProps {
  match: {
    params: {
      id: string;
    }
  }
}

interface IState {
  source: Source | null;
}
class SourceDetails extends Component<IProps, IState> {
  // Initialize the state
  constructor(props: IProps){
    super(props);
    this.state = {
      source: null,
    }
  }
  //{ match }: RouteComponentProps<TParams>)
  // Fetch the sources on first mount.

  // Retrieves the list of sources from the Express app
  // Fetch the user info on first mount.
  componentDidMount() {
    this.getSourceDetails();
  }

  // Retrieves the list of sources from the Express app
  getSourceDetails = () => {
    axios.get('/api/v1/source/' + this.props.match.params.id).then(res => {
      const source = res.data;
      this.setState({ source });
    })
  }

  render() {
    let source: Source | null;
    source = this.state.source;
    return (
        <Container fluid>
          <Row>
            <Col>
            </Col>
            <Col md={9}>
              <Breadcrumb className="bg-white">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                { source &&
                <Breadcrumb.Item active>{source.nickname} Source Details</Breadcrumb.Item>
                }
              </Breadcrumb>
              { source
                  ? (
                      <Card>
                        <Card.Header>
                          <ButtonToolbar
                              className="justify-content-end"
                              aria-label="Toolbar with Button groups"
                          >
                            <ButtonGroup className={"me-2"}>
                              <Button>
                                <FontAwesomeIcon icon={faEdit} className={"me-2"}></FontAwesomeIcon>
                                Edit
                              </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                              <Button>
                                <FontAwesomeIcon icon={faTrash} className={"me-2"}></FontAwesomeIcon>
                                Delete
                              </Button>
                            </ButtonGroup>
                          </ButtonToolbar>

                        </Card.Header>
                        <Card.Body>
                          <ListGroup horizontal>
                            <ListGroup.Item>Source Name</ListGroup.Item>
                            <ListGroup.Item>{source.nickname}</ListGroup.Item>
                          </ListGroup>
                          <ListGroup horizontal>
                            <ListGroup.Item>Source Name</ListGroup.Item>
                            <ListGroup.Item>{source.nickname}</ListGroup.Item>
                          </ListGroup>
                          <br/>
                          <Card.Title>Source Events</Card.Title>
                          <Table>
                            <thead>
                              <tr>
                                <th>
                                  Time
                                </th>
                                <th>
                                  Level
                                </th>
                                <th>
                                  Message
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              { source.events &&
                              source.events.map((event: SourceEvent) => {
                                return (
                                    <tr>
                                      <td>
                                        {event.datetime}
                                      </td>
                                      <td>
                                        {event.type}
                                      </td>
                                      <td>
                                        {event.message}
                                      </td>
                                    </tr>
                                    )
                              })
                              }
                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                  )
                  : <Card>Source details not loaded.</Card>
              }
            </Col>
            <Col>
              <div className="d-none d-xl-block">
                <StatsBar></StatsBar>
              </div>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default SourceDetails;


