import {Button, Container, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faEdit} from "@fortawesome/free-solid-svg-icons";


interface IProps {
  tag?: Tag,
}

export default function TagModal(props: IProps) {
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

  if (props.tag) {
    return (
        <>
          <a><FontAwesomeIcon onClick={handleShow} icon={faEdit}></FontAwesomeIcon></a>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Edit tag: <a>{props.tag.name}</a></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Form.Group controlId="createTagForm.formUsername">
                    <Form.Label>Tag name</Form.Label>
                    <Form.Control required type="name" placeholder="Tag name" defaultValue={props.tag.name}/>
                  </Form.Group>
                  <Form.Group controlId="createTagForm.formDescription">
                    <Form.Label>Tag description</Form.Label>
                    <Form.Control as="textarea" rows={3} defaultValue={props.tag.description}/>
                  </Form.Group>
                  <Form.Group controlId="createTagForm.formIsCommentTag">
                    <Form.Check type="checkbox" label="Is this a comment tag?"/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="formTagColor">Tag Color</Form.Label>
                    <Form.Control
                        type="color"
                        id="formTagColor"
                        defaultValue="#563d7c"
                        title="Choose your tag color."
                    />
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
            <span>Create Tag</span>
          </Button>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Create Tag</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Form.Group controlId="createTagForm.formUsername">
                    <Form.Label>Tag name</Form.Label>
                    <Form.Control required type="name" placeholder="Tag name"/>
                  </Form.Group>
                  <Form.Group controlId="createTagForm.formDescription">
                    <Form.Label>Tag description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group controlId="createTagForm.formIsCommentTag">
                    <Form.Check type="checkbox" label="Is this a comment tag?" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="formTagColor">Tag Color</Form.Label>
                    <Form.Control
                        type="color"
                        id="formTagColor"
                        defaultValue="#563d7c"
                        title="Choose your tag color."
                    />
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