import {Button, Container, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";


interface IProps {
  type: "cancel" | "delete",
  message: string,
  header: string
}

export default function ConfirmModal(props: IProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }
  // @ts-ignore
  const handleSubmit = (event) => {
    const form = event.currentTarget;
  };

  return (
      <>
        <a><FontAwesomeIcon onClick={handleShow} icon={faTrash}></FontAwesomeIcon></a>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <p>{props.message}</p>
              <small className="text-muted">This action cannot be undone.</small>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" type="submit">Confirm</Button>
          </Modal.Footer>
        </Modal>
      </>
  )
}