import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import {Card, Button, ButtonToolbar, Form, Modal} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlusCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';
import UserModal from './UserModal';

interface IProps {
  users: User[] | [];
}

export default function UserTable(props: IProps) {

  if (props.users.length > 0) {
    const userRows = props.users.map((user: User) =>
        <tr key={user._id}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td><UserModal user={user}></UserModal></td>
          <td><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></td>
        </tr>
    );

    return (
        <Container fluid>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <h3>Users</h3>
              <ButtonToolbar>
                <UserModal></UserModal>
              </ButtonToolbar>
            </Card.Header>
            <Table striped bordered hover responsive size="sm">
              <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              {userRows}
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
              <h3>Users</h3>
              <ButtonToolbar>
                <Button variant={"secondary"}>
                  <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
                  <span>Create Source</span></Button>
              </ButtonToolbar>
            </Card.Header>
            <Table striped bordered hover responsive size="sm">
              <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>No user found.</td>
              </tr>
              </tbody>
            </Table>
          </Card>
        </Container>
    )
  }
}