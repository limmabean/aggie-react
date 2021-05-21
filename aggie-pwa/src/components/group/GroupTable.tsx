import * as React from 'react';
import Table from 'react-bootstrap/Table';
import {Card, Pagination, Button, ButtonToolbar, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  visibleGroups: Group[] | [];
  sources: Source[] | [];
  tags: Tag[] | [];
}

export default function GroupTable(props: IProps) {
  const groups = Object.values(props.visibleGroups);
  if (groups.length > 0) {
    const groupRows = groups.map((group: Group) =>
      <tr key={group._id}>
        <td>
          <Form>
            <Form.Check
                type="checkbox"
                id={group._id}
            />
          </Form>
        </td>
        <td>{group.idnum}</td>
        <td>{group.title}</td>
        <td className="text-break">{group.locationName}</td>
        {group.notes
            ? <td>{group.notes}</td>
            : <td></td>
        }
        <td>{group.creator.username}</td>
        {group.assignedTo
            ? <td>{group.assignedTo.username}</td>
            : <td></td>
        }
        <td></td>
      </tr>
    );

    return (
      <Card>
        <Card.Header>
          <ButtonToolbar>
            <Button variant={"primary"} className="mr-3">
              <FontAwesomeIcon className="mr-2" icon={faTrash}></FontAwesomeIcon>
              <span>Delete</span>
            </Button>
            <Button variant={"secondary"}>
              <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
              <span>Create Group</span></Button>
          </ButtonToolbar>
        </Card.Header>
        <Table striped bordered hover responsive size="sm">
          <thead>
          <tr>
            <th>
              <Form>
              <Form.Check
                  type="checkbox"
                  id={"select-all"}
              />
              </Form>
            </th>
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
            {groupRows}
          </tbody>
        </Table>
        <Card.Footer className="justify-center">
          <div className="d-flex justify-content-center">
            <Pagination size={'sm'}>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </Card.Footer>
      </Card>
    );
  } else {
    return (
        <Table striped bordered hover size="sm">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              No Incidents Found.
            </tr>
          </tbody>
        </Table>
    )
  }
}
