import {Button, Container, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faEdit} from "@fortawesome/free-solid-svg-icons";


interface IProps {
  setting: Setting,
}

function capitalizeFirstLetter(s: string) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export default function APIModal(props: IProps) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setValidated(false);
  }
  const handleShow = () => {
    setShow(true);
  }
  // @ts-ignore
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log(form.checkValidity());
    }
    setValidated(true);
  };

  const twitterFormJSX = () => {
    if (props.setting.twitter) {
      return (
          <>
            <h6>Update Twitter API settings here.</h6>
            <Form.Group controlId="APISettingsForm.twitterAPI_key">
              <Form.Label>API key</Form.Label>
              <Form.Control required placeholder="API_key" defaultValue={props.setting.twitter.API_key}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.twitterAPI_key_secret">
              <Form.Label>API key secret</Form.Label>
              <Form.Control required placeholder="API_key_secret"
                            defaultValue={props.setting.twitter.API_key_secret}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.twitterAccess_token">
              <Form.Label>Access token</Form.Label>
              <Form.Control required placeholder="access_token"
                            defaultValue={props.setting.twitter.access_token}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.twitterAccess_token_secret">
              <Form.Label>Access token secret</Form.Label>
              <Form.Control required placeholder="access_token_secret"
                            defaultValue={props.setting.twitter.access_token_secret}/>
            </Form.Group>
          </>
      )
    } else {
      return;
    }
  }
  const crowdTangleFormJSX = () => {
    if (props.setting.crowdtangle) {
      return (
          <>
            <h6>Update Crowdtangle API (Facebook) settings here.</h6>
            <Form.Group controlId="APISettingsForm.CTapiToken">
              <Form.Label>API Token</Form.Label>
              <Form.Control required placeholder="apiToken" defaultValue={props.setting.crowdtangle.apiToken}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.CTbaseUrl">
              <Form.Label>Base Url</Form.Label>
              <Form.Control required placeholder="baseUrl" defaultValue={props.setting.crowdtangle.baseUrl}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.CTcount">
              <Form.Label>Count</Form.Label>
              <Form.Control required placeholder="count" defaultValue={props.setting.crowdtangle.count}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.CTlanguage">
              <Form.Label>Language</Form.Label>
              <Form.Control required placeholder="Language" defaultValue={props.setting.crowdtangle.language}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.CTpathName">
              <Form.Label>Path Name</Form.Label>
              <Form.Control required placeholder="pathName" defaultValue={props.setting.crowdtangle.pathName}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.CTzawgyiProb">
              <Form.Label>Zawgyi Prob</Form.Label>
              <Form.Control required placeholder="zawgyi_prob" defaultValue={props.setting.crowdtangle.zawgyiProb}/>
            </Form.Group>
            <Form.Group controlId="APISettingsForm.CTdetectHateSpeech">
              <Form.Check type="checkbox" label="Detect hate speech?"/>
            </Form.Group>
          </>
      )
    } else {
      return;
    }
  }
  return (
      <>
        <Button onClick={handleShow} className="mr-2">{props.setting.setting}</Button>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Edit API settings: <a>{capitalizeFirstLetter(props.setting.setting)}</a></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                {/* This section will add the appropriate JSX based on which setting is being edited */}
                {twitterFormJSX()}
                {crowdTangleFormJSX()}
                {}
              </Container>
            </Modal.Body>
            { (props.setting.twitter || props.setting.crowdtangle) &&
              <Modal.Footer className="justify-content-between">
                <Button variant="secondary">Test</Button>
                <div>
                  <Button variant="secondary" onClick={handleClose} className="mr-2">Close</Button>
                  <Button variant="primary" type="submit">Submit</Button>
                </div>
              </Modal.Footer>
            }
            { (props.setting.elmo) &&
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" type="submit">Submit</Button>
              </Modal.Footer>
            }
          </Form>
        </Modal>
      </>
  )

}