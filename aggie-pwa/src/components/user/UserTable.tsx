import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import {Card, Container, ButtonToolbar, Form, Modal} from "react-bootstrap";
import UserModal from './UserModal';
import { Link } from 'react-router-dom';
import ConfirmModal from "../ConfirmModal";

interface IProps {
  users: User[] | [];
}

export default function UserTable(props: IProps) {
  let userRows;
  if (props.users.length > 0) {
    userRows = props.users.map((user: User) =>
        <tr key={user._id}>
          <td><Link to={'/user/' + user._id}>{user.username}</Link></td>
          <td><a href={"mailto:" + user.email}>{user.email}</a></td>
          <td>{user.role}</td>
          <td><UserModal user={user}></UserModal></td>
          <td>
            <ConfirmModal type={"delete"} message={"Are you sure you would like to delete " + user.username + "?"}
                            header={"Delete user: " + user.username}/>
          </td>
        </tr>
    );
  } else {
    userRows = <tr><td>No Users Found.</td></tr>
  }
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
}
