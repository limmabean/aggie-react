import * as React from 'react';
import Table from 'react-bootstrap/Table';

interface IProps {
  visibleGroups: Group[] | [];
  sources: Source[] | [];
  tags: Tag[] | [];
}

export default function GroupTable(props: IProps) {
  const groups = Object.values(props.visibleGroups);
  if (groups.length > 0) {
    const groupRows = groups.map((group: Group) =>
        <tr>
          <td>{group.idnum}</td>
          <td>{group.title}</td>
          <td>{group.locationName}</td>
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
        <Table striped bordered hover size="sm">
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
            {groupRows}
          </tbody>
        </Table>
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
