import * as React from 'react';
import Table from 'react-bootstrap/Table';
import {Card, Pagination, Button, ButtonToolbar, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';

interface IProps {
  tags: Tag[] | [];
}

export default function TagTable(props: IProps) {
  if (props.tags.length > 0) {
    const tagRows = props.tags.map((tag: Tag) =>
        <tr key={tag._id}>
          <td>{tag.name}</td>
          <td>{tag.color}</td>
          <td>{tag.user.username}</td>
          {tag.description
              ? <td>{tag.description}</td>
              : <td></td>
          }
        </tr>
    );

    return (
        <Container fluid>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <h3>Tags</h3>
              <ButtonToolbar>
                <Button variant={"primary"} className="mr-3">
                  <FontAwesomeIcon className="mr-2" icon={faTrash}></FontAwesomeIcon>
                  <span>Delete</span>
                </Button>
                <Button variant={"secondary"}>
                  <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
                  <span>Create Tag</span></Button>
              </ButtonToolbar>
            </Card.Header>
            <Table striped bordered hover responsive size="sm">
              <thead>
              <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Creator</th>
                <th>Notes</th>
              </tr>
              </thead>
              <tbody>
              {tagRows}
              </tbody>
            </Table>
          </Card>
        </Container>
    );
  } else {
    return (
        <Container fluid>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <h3>Tags</h3>
              <ButtonToolbar>
                <Button variant={"primary"} className="mr-3">
                  <FontAwesomeIcon className="mr-2" icon={faTrash}></FontAwesomeIcon>
                  <span>Delete</span>
                </Button>
                <Button variant={"secondary"}>
                  <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
                  <span>Create Tag</span></Button>
              </ButtonToolbar>
            </Card.Header>
            <Table striped bordered hover responsive size="sm">
              <thead>
              <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Creator</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>No tags found.</td>
              </tr>
              </tbody>
            </Table>
          </Card>
        </Container>
    )
  }
}
