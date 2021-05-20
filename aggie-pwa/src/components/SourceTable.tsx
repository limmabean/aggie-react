import * as React from 'react';
import Table from 'react-bootstrap/Table';
import {Card, Pagination, Button, ButtonToolbar, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';

interface IProps {
  sources: Source[] | [];
}

export default function SourceTable(props: IProps) {
  if (props.sources.length > 0) {
    const sourceRows = props.sources.map((source: Source) =>
      <tr key={source._id}>
        <td>{source.media}</td>
        <td>{source.nickname}</td>
        {source.user
          ? <td>{source.user.username}</td>
          : <td></td>
        }
        {source.keywords
          ? <td>{source.keywords}</td>
          : <td></td>
        }
        <td>{source.tags}</td>
        <td>{source.unreadErrorCount}</td>
        {source.enabled
          ? <td>
              <Form>
                <Form.Switch id={source._id} checked readOnly></Form.Switch>
              </Form>
            </td>
          : <td>
              <Form.Switch></Form.Switch>
            </td>
        }
      </tr>
    );

    return (
      <Container fluid>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <h3>Sources</h3>
            <ButtonToolbar>
              <Button variant={"primary"} className="mr-3">
                <FontAwesomeIcon className="mr-2" icon={faTrash}></FontAwesomeIcon>
                <span>Delete</span>
              </Button>
              <Button variant={"secondary"}>
                <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
                <span>Create Source</span></Button>
            </ButtonToolbar>
          </Card.Header>
          <Table striped bordered hover responsive size="sm">
            <thead>
            <tr>
              <th>Media</th>
              <th>Name</th>
              <th>Creator</th>
              <th>Keywords</th>
              <th>Notes</th>
              <th>New Warnings</th>
              <th>Enabled</th>
            </tr>
            </thead>
            <tbody>
              {sourceRows}
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
            <h3>Sources</h3>
            <ButtonToolbar>
              <Button variant={"primary"} className="mr-3">
                <FontAwesomeIcon className="mr-2" icon={faTrash}></FontAwesomeIcon>
                <span>Delete</span>
              </Button>
              <Button variant={"secondary"}>
                <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
                <span>Create Source</span></Button>
            </ButtonToolbar>
          </Card.Header>
          <Table striped bordered hover responsive size="sm">
            <thead>
            <tr>
              <th>Media</th>
              <th>Name</th>
              <th>Creator</th>
              <th>Keywords</th>
              <th>Notes</th>
              <th>New Warnings</th>
              <th>Enabled</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>No sources found.</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Container>
    )
  }
}
