import * as React from 'react';
import Table from 'react-bootstrap/Table';
import {Card, Pagination, Button, ButtonToolbar, Form, Image} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IProps {
  sources: Source[] | [];
}

export default function SourceTable(props: IProps) {
  let sourceRows;
  if (props.sources.length > 0) {
    sourceRows = props.sources.map((source: Source) =>
        <tr key={source._id}>
          <td><Image src={"/images/" + source.media + ".png"} rounded/></td>
          <td><Link to={"/source/" + source._id}>{source.nickname}</Link></td>
          {source.user
              ? <td><Link to={"/user/" + source.user._id}>{source.user.username}</Link></td>
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
                <Form.Switch id={source._id} readOnly></Form.Switch>
              </td>
          }
        </tr>
    );
  } else {
    sourceRows = <tr><td>No Sources Found.</td></tr>
  }

  return (
    <Container fluid>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <h3>Sources</h3>
          <ButtonToolbar>
            <Button variant={"primary"}>
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
}
