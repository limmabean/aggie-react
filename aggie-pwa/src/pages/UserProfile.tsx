import React, { Component } from 'react';
import {useParams, RouteComponentProps} from 'react-router-dom';
import axios from 'axios';
import {Container, Col, Row, Card} from "react-bootstrap";
import StatsBar from '../components/StatsBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser, faEdit, faUsersCog, faCog, faCloud } from "@fortawesome/free-solid-svg-icons";

type TParams = { id: string };

interface IProps {
  match: {
    params: {
      id: string;
    }
  }
}

interface IState {
  user: User | null;
}
class UserProfile extends Component<IProps, IState> {
  // Initialize the state
  constructor(props: IProps){
    super(props);
    this.state = {
      user: null,
    }
  }
  //{ match }: RouteComponentProps<TParams>)
  // Fetch the sources on first mount.

  // Retrieves the list of sources from the Express app
  // Fetch the user info on first mount.
  componentDidMount() {
    this.getUser();
  }

  // Retrieves the list of sources from the Express app
  getUser = () => {
    axios.get('/api/v1/user/' + this.props.match.params.id).then(res => {
      const user = res.data;
      this.setState({ user });
    })
  }

  render() {
    let user: User | null;
    user = this.state.user;
    return (
        <div className="App">
          <Container fluid>
            <Row>
              <Col>
              </Col>
              <Col md={6}>
                {user
                    ? (
                        <Card>
                          <Card.Header><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Card.Header>
                          <Card.Body>
                            <FontAwesomeIcon icon={faUser} size="4x"></FontAwesomeIcon>
                            <h2>{user.username}</h2>
                            <h6>{user.role}</h6>
                          </Card.Body>

                        </Card>
                    )
                    : <Card>User profile not loaded.</Card>
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

export default UserProfile;


