import * as React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import {Card, ButtonToolbar} from "react-bootstrap";
import ConfirmModal from "../ConfirmModal";
import { Container } from 'react-bootstrap';
import TagModal from "./TagModal";

interface IProps {
  tags: Tag[] | [];
}

export default function TagTable(props: IProps) {
  let tagRows;
  //
  if (props.tags.length > 0) {
    tagRows = props.tags.map((tag: Tag) =>
        <tr key={tag._id}>
          <td>{tag.name}</td>
          <td style={{backgroundColor: tag.color}}>{tag.color}</td>
          <td><Link to={"/user/" + tag.user._id}>{tag.user.username}</Link></td>
          {tag.description
              ? <td>{tag.description}</td>
              : <td></td>
          }
          <td><TagModal tag={tag}></TagModal></td>
          <td><ConfirmModal type="delete" message={"Are you sure you would like to delete the tag " + tag.name + "?"}
                            header={"Delete tag: " + tag.name}/>
          </td>
        </tr>
    );
  } else {
    tagRows = <tr><td>No Tags Found.</td></tr>
  }

  return (
      <Container fluid>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <h3>Tags</h3>
            <ButtonToolbar>
              <TagModal></TagModal>
            </ButtonToolbar>
          </Card.Header>
          <Table striped bordered hover responsive size="sm">
            <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Creator</th>
              <th>Notes</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              {tagRows}
            </tbody>
          </Table>
        </Card>
      </Container>
  );
}
