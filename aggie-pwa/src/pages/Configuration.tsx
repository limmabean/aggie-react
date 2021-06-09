import React, { Component } from 'react';
import axios from 'axios';
import {Card, Col, Container, Row, Form, Button} from "react-bootstrap";
import APIModal from "../components/configuration/APIModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileExport, faSync} from "@fortawesome/free-solid-svg-icons";

interface IProps {
}

interface IState {
  APISettings: Setting[] | [];
  fetchState: Setting | null;
  emailSetting: Setting | null;
}

class Configuration extends Component<IProps, IState> {
  // Initialize the state
  constructor(props: IProps) {
    super(props);
    this.state = {
      APISettings: [],
      fetchState: null,
      emailSetting: null
    }
  }
  // Fetch the list on first mount
  componentDidMount() {
    this.getAPISettings();
    this.getFetchStatus();
    this.getEmailSettings();
  }

  // Retrieves the list of items from the Express app
  getAPISettings = () => {
    axios.get('/api/v1/settings/twitter').then(res => {
      const settings = [ res.data ];
      this.setState((state) => {
        return { APISettings: settings.concat(state.APISettings) };
      });
    });
    axios.get('/api/v1/settings/elmo').then(res => {
      const settings = [ res.data ];
      this.setState((state) => {
        return { APISettings: settings.concat(state.APISettings) };
      });
    });
    axios.get('/api/v1/settings/gplaces').then(res => {
      const settings = [ res.data ];
      this.setState((state) => {
        return { APISettings: settings.concat(state.APISettings) };
      });
    });
    axios.get('/api/v1/settings/crowdtangle').then(res => {
      const settings = [ res.data ];
      this.setState((state) => {
        return { APISettings: settings.concat(state.APISettings) };
      });
    });
  }
  getFetchStatus = () => {
    axios.get('/api/v1/settings/fetching').then(res => {
      const fetchState = res.data;
      this.setState({ fetchState });
    })
  }
  getEmailSettings = () => {
    axios.get('/api/v1/settings/email').then(res => {
      const emailSetting = res.data;
      this.setState({ emailSetting });
    })
  }
  render() {
    let APISettings: Setting[] | [];
    // @ts-ignore
    APISettings = this.state.APISettings;
    let fetchState: Setting | null;
    fetchState = this.state.fetchState;
    let emailSetting: Setting | null;
    emailSetting = this.state.emailSetting;

    let fetchStateJSX;
    if (fetchState) {
      fetchStateJSX = fetchState.fetching
          ? <Form.Switch id="fetch-state" checked readOnly></Form.Switch>
          : <Form.Switch id="fetch-state" readOnly></Form.Switch>
    } else {
      fetchStateJSX = <></>
    }
    return (
        <div>
          <Container fluid>
            <Row>
              <Col>
              </Col>
              <Col xs={9}>
                <Container fluid>
                  <Card>
                    <Card.Header className="d-flex justify-content-between">
                      <h3>Configuration</h3>
                    </Card.Header>
                    <Card.Body>
                      <h5>Turn fetching on/off</h5>
                      <Form>
                        {fetchStateJSX}
                      </Form>
                      <h5>API Configuration</h5>
                      {APISettings.map((setting: Setting)=> {
                        return(
                            <APIModal setting={setting}></APIModal>
                        )
                      })}
                      <h5>Email Settings</h5>
                      <Form>
                        { emailSetting &&
                        <>
                          <Form.Group>
                            <Form.Label>App Email Address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="First name"
                                defaultValue={emailSetting.email?.from}
                                readOnly
                            />
                            <Form.Text className="text-muted">
                              This email will send account set-up emails and password reset emails.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Email Transport Configuration</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="First name"
                                defaultValue={emailSetting.email?.transport.method}
                                readOnly
                            />
                          </Form.Group>
                        </>
                        }
                      </Form>
                      <Row>
                        <Col>
                          <h5>Update Crowdtangle Lists</h5>
                          <Button><FontAwesomeIcon icon={faSync} className="mr-2"></FontAwesomeIcon>Run Update</Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h5>CSV Export</h5>
                          <Button><FontAwesomeIcon icon={faFileExport} className="mr-2"></FontAwesomeIcon>Export</Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Configuration;
