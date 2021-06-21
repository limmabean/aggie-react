import React, { Component } from 'react';
import axios from 'axios';
import {Container, Col, Row} from "react-bootstrap";
import StatsBar from '../components/StatsBar';
import UserTable from "../components/user/UserTable";

interface IProps {
}

interface IState {
  users: User[] | [];
}

class UsersIndex extends Component<IProps, IState> {
  // Initialize the state
  constructor(props: IProps){
    super(props);
    this.state = {
      users: [],
    }
  }

  // Fetch the sources on first mount.
  componentDidMount() {
    this.getUsers();
  }

  // Retrieves the list of sources from the Express app
  getUsers = () => {
    axios.get('/api/v1/user')
        .then(res => {
          const users = res.data;
          this.setState({ users });
          console.log(users);
        })
        .catch(err => {
          console.error("Server did not get users. Check your connection to the internet.")
        })
  }

  render() {
    let users: User[] | [];
    users = this.state.users;

    return (
        <div className="App" >
          <Container fluid>
            <Row>
              <Col>
              </Col>
              <Col xl={9}>
                <UserTable users={users}></UserTable>
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

export default UsersIndex;
