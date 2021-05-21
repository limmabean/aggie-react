import {Button, Container, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faEdit} from "@fortawesome/free-solid-svg-icons";

interface IProps {
  user?: User,
}

const userRoles = ['viewer', 'monitor', 'admin'];

function capitalizeFirstLetter(s: string) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export default function CreateUserModal(props: IProps) {
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

  if (props.user) {
    return (
        <>
          <a><FontAwesomeIcon onClick={handleShow} icon={faEdit}></FontAwesomeIcon></a>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              size="lg"
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Edit user: <a>{props.user.username}</a></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="username" placeholder="Username"
                                  defaultValue={props.user.username}/>
                  </Form.Group>
                  <Form.Group controlId="formUserEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email"
                                  defaultValue={props.user.email}/>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formUserRole">
                    <Form.Label>User Role</Form.Label>
                    <Form.Control as="select" defaultValue={props.user.role}>
                      {userRoles.map((userRole) => {
                        return <option key={userRole}>{userRole}</option>
                      })}
                    </Form.Control>
                  </Form.Group>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" type="submit">Submit</Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </>
    )
  } else {
    return (
        <>
          <Button variant={"primary"} onClick={handleShow}>
            <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
            <span>Create User</span>
          </Button>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              size="lg"
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Create User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="username" placeholder="Username"/>
                  </Form.Group>
                  <Form.Group controlId="formUserEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formUserRole">
                    <Form.Label>User Role</Form.Label>
                    <Form.Control as="select">
                      {userRoles.map((userRole) => {
                        return <option key={userRole}>{capitalizeFirstLetter(userRole)}</option>
                      })}
                    </Form.Control>
                  </Form.Group>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" type="submit">Submit</Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </>
    )
  }
}