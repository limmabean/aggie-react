import * as React from 'react';
import Table from 'react-bootstrap/Table';
import {Card, Pagination, Button, ButtonToolbar, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlusCircle, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

interface IProps {
  visibleReports: Report[] | [];
  sources: Source[] | [];
  tags: Tag[] | [];
  groups: Group[] | null;
}

export default function ReportTable(props: IProps) {

  let tagsById: { [x: string]: Tag; };
  tagsById = {};
  props.tags.forEach((tag: Tag)=> {
    tagsById[tag._id] = tag;
  });

  const reports = Object.values(props.visibleReports);
  if (reports.length > 0) {
    const reportRows = reports.map((report: Report) =>
        <tr key={report._id}>
          <td>
            <Form>
              <Form.Check
                  type="checkbox"
                  id={report._id}
              />
            </Form>
          </td>
          <td>{report.author}</td>
          <td>Image</td>
          <td className="text-break">{report.content}</td>
          {report.hasSMTCTags
              ? <td>
                {report.smtcTags.map((smtcTag) => {
                  return (
                      <span key={smtcTag}>
                        {smtcTag}
                      </span>
                  )
                })}
                </td>
              : <td></td>
          }
          {report._incident
              ? <td>{report._incident}</td>
              : <td><a>Edit</a></td>
          }
        </tr>
    );

    return (
        <Card>
          <Card.Header>
            <ButtonToolbar>
              <Button variant={"secondary"} className="mr-3">
                <FontAwesomeIcon className="mr-2" icon={faEnvelopeOpen}></FontAwesomeIcon>
                <span>Read/Unread</span>
              </Button>
              <Button variant={"secondary"} className="mr-3">
                <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
                <span>Add to Group</span>
              </Button>
              <Button variant={"primary"}>
                <span>Batch Mode</span>
              </Button>
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
              <th>Source Info</th>
              <th>Thumbnail</th>
              <th>Content</th>
              <th>Tags</th>
              <th>Group</th>
            </tr>
            </thead>
            <tbody>
            {reportRows}
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
            <td>No reports found.</td>
          </tr>
          </tbody>
        </Table>
    )
  }
}
