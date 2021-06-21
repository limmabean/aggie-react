import * as React from 'react';
import Table from 'react-bootstrap/Table';
import {Card, Pagination, Button, ButtonToolbar, Form, ButtonGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlusCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import EditTagsModal from "../tag/EditTagsModal";
import ConfirmModal from "../ConfirmModal";

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
        {group.assignedTo
            ? <td><Link to={"/user/" + group.assignedTo._id}>{group.assignedTo.username}</Link></td>
            : <td></td>
        }
        <td><Link to={"/user/" + group.creator._id}>{group.creator.username}</Link></td>
        <td>
          {group.smtcTags.map((smtcTag)=> {
            return (
                <p key={smtcTag}>{smtcTag}</p>
            )
          })}
          <EditTagsModal group={group} tags={props.tags}/>
        </td>
        <td>
          <Button variant={"link"}>
            <FontAwesomeIcon icon={faEdit} size="lg"></FontAwesomeIcon>
          </Button>
        </td>
        <td>
          <Button variant={"link"}>
            <ConfirmModal type={"delete"} message={"Are you sure you want to delete the group " + group.title}
                          header={"Delete group: " + group.title}/>
          </Button>
        </td>
      </tr>
    );

    return (
      <Card>
        <Card.Header>
          <ButtonToolbar
              className="justify-content-end"
              aria-label="Toolbar with Button groups"
          >
            <ButtonGroup className={"me-2"}>
              <Button>
                <FontAwesomeIcon icon={faEdit} className={"me-2"}></FontAwesomeIcon>
                Edit
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>
                <FontAwesomeIcon icon={faTrash} className={"me-2"}></FontAwesomeIcon>
                Delete
              </Button>
            </ButtonGroup>
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
            <th>Edit</th>
            <th>Delete</th>
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
              <td>No Groups Found.</td>
            </tr>
          </tbody>
        </Table>
    )
  }
}
