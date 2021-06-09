import {Button, Container, Form, Modal, Table} from "react-bootstrap";
import React, {useState} from "react";
// @ts-ignore
import Tags from "@yaireo/tagify/dist/react.tagify";
import {Link} from "react-router-dom";


interface IProps {
  report?: Report,
  group?: Group,
  tags: Tag[],
}

export default function EditTagsModal(props: IProps) {
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

  const groupTagModalJSX = () => {
    if (props.group) {
      let tagifyRef;
      let tagifySettings = {
        whitelist: props.tags,
        autoComplete: {
          enabled: true
        }
      }
      return (
          <>
            <Modal.Header closeButton>
              {props.group && props.group.title &&
              <Modal.Title>Edit tags on: <a>{props.group.title}</a></Modal.Title>
              }
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Table striped bordered hover responsive size="sm">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Notes</th>
                    <th>Assigned To</th>
                    <th>Creation Info</th>
                    <th>Tags</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr key={props.group._id}>
                      <td>{props.group.idnum}</td>
                      <td>{props.group.title}</td>
                      <td className="text-break">{props.group.locationName}</td>
                      {props.group.notes
                          ? <td>{props.group.notes}</td>
                          : <td></td>
                      }
                      {props.group.assignedTo
                          ? <td><Link to={"/user/" + props.group.assignedTo._id}>{props.group.assignedTo.username}</Link></td>
                          : <td></td>
                      }
                      <td><Link to={"/user/" + props.group.creator._id}>{props.group.creator.username}</Link></td>
                      <td>
                        {props.group.smtcTags.map((smtcTag)=> {
                          return (
                              <p key={smtcTag}>{smtcTag}</p>
                          )
                        })}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Tags
                    tagifyRef={tagifyRef}
                    settings={tagifySettings}
                    placeholder={"Please type tags to add to group"}
                ></Tags>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" type="submit">Submit</Button>
            </Modal.Footer>
          </>
      )
    }
  }
  return (
      <>
        <Button variant="link" onClick={handleShow}>Edit</Button>
        <Modal
            show={show}
            size={"xl"}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
          <Form onSubmit={handleSubmit}>
            {groupTagModalJSX()}
          </Form>
        </Modal>
      </>
  )
}