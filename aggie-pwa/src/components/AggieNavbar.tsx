import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser, faTags, faUsersCog, faCog, faCloud } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface IProps {
}

interface IState {
  sessionToken: User | null;
}

class AggieNavbar extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      sessionToken: null,
    }
  }

  componentDidMount() {
    this.getSession();
  }

  getSession = () => {
    axios.get('/session').then(res => {
      const sessionToken = res.data;
      this.setState({ sessionToken });
    })
  }
  render() {
    let sessionToken: User | null;
    sessionToken = this.state.sessionToken;
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-between mb-4">
        <Nav variant="pills">
          <Link to={'/reports'}>
            <Navbar.Brand>
              <Image
                  alt="Aggie Logo"
                  src="/images/logo-v1.png"
              />{' '}
            </Navbar.Brand>
          </Link>
          <Nav.Item>
            <LinkContainer to={'/reports'}>
              <Nav.Link eventKey="1">
                Reports
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              Relevant Reports
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to={'/incidents'}>
              <Nav.Link eventKey="3">
                Groups
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <LinkContainer to={'/analysis'}>
            <Nav.Link eventKey="4">
              Analysis
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <Nav.Item>
            {sessionToken ? (
                <LinkContainer to={'/user/' + sessionToken._id}>
                  <Nav.Link eventKey="5">
                    <FontAwesomeIcon className="mr-2" icon={faUser}/>
                    {sessionToken ? (
                        <span> {sessionToken.username} </span>
                    ) : (
                        <span> Undefined </span>
                    )}
                  </Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link eventKey="5">
                  <FontAwesomeIcon className="mr-2" icon={faUser}/>
                  <span> Undefined </span>
                </Nav.Link>
            )}
          </Nav.Item>
          <NavDropdown title="Settings" id="nav-dropdown">
            <LinkContainer to={'/config'}>
              <NavDropdown.Item eventKey="6.1">
                <FontAwesomeIcon className="mr-2" icon={faCog}/>
                <span>Configuration</span>
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider/>
            <LinkContainer to={'/users'}>
              <NavDropdown.Item eventKey="6.2">
                <FontAwesomeIcon className="mr-2" icon={faUsersCog}/>
                <span>Users</span>
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={'/tags'}>
              <NavDropdown.Item eventKey="6.3">
                <FontAwesomeIcon className="mr-2" icon={faTags}/>
                <span>Tags</span>
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={'/sources'}>
              <NavDropdown.Item eventKey="6.4">
                <FontAwesomeIcon className="mr-2" icon={faCloud}/>
                <span>Sources</span>
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <Nav.Item>
            <LinkContainer to={'/logout'}>
              <Nav.Link eventKey="7">
                <FontAwesomeIcon icon={faSignOutAlt}/>
                <span> Log Out </span>
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}

export default AggieNavbar;
