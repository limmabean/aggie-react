import React, { Component } from 'react';
import axios from 'axios';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import TagsBar from "../components/tag/TagsBar";
import DateRangePicker from "react-bootstrap-daterangepicker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import ReportTable from "../components/report/ReportTable";
import StatsBar from "../components/StatsBar";

interface IProps {
}

interface IState {
  sources: Source[] | [];
  groups: Groups | null;
  tags: Tag[] | [];
  reports: Reports | null;
}

class ReportsIndex extends Component<IProps, IState> {
  // Initialize the state
  constructor(props: IProps) {
    super(props);
    this.state = {
      sources: [],
      groups: null,
      reports: null,
      tags: [],
    }
  }
  // Fetch the list on first mount
  componentDidMount() {
    this.getSources();
    this.getGroups();
    this.getTags();
    this.getReports();
  }

  // Retrieves the list of items from the Express app
  getSources = () => {
    axios.get('/api/v1/source').then(res => {
      const sources = res.data;
      this.setState({ sources });
    })
  }
  getGroups = () => {
    axios.get('/api/v1/group').then(res => {
      const groups = res.data;
      this.setState({ groups });
    })
  }
  getTags = () => {
    axios.get('/api/v1/tag').then(res => {
      const tags = res.data;
      this.setState({ tags });
    })
  }
  getReports = () => {
    axios.get('/api/v1/report?page=0').then(res => {
      const reports = res.data;
      this.setState({ reports });
    })
  }
  render() {
    let sources: Source[] | [];
    sources = this.state.sources;
    let groups: Group[] | [];
    if (this.state.groups) {
      groups = this.state.groups.results;
    } else {
      groups = [];
    }
    let reports: Report[] | null;
    if (this.state.reports) {
      reports = this.state.reports.results;
    } else {
      reports = [];
    }
    let tags: Tag[] | null;
    tags = this.state.tags;
    return (
      <div className="">
        <Container fluid>
          <Row>
            <Col>
              <div className="d-none d-xl-block">
                <TagsBar tags={tags}></TagsBar>
              </div>
            </Col>
            <Col xl={9}>
              <Card className="mb-4">
                <Container fluid>
                  <Form>
                    <Form.Row className="pt-2">
                      <Col>
                        <Form.Control placeholder="Keywords" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Author" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Tags" />
                      </Col>
                    </Form.Row>
                    <Form.Row className="pt-2">
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                          <Form.Control as="select">
                            <option>Status</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                          <Form.Control as="select">
                            <option>Platform</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                          <Form.Control as="select">
                            <option>Source</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                          <Form.Control as="select">
                            <option>Crowdtangle List</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                          <Form.Control as="select">
                            <option>Group</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <DateRangePicker>
                        <Button>Date Range</Button>
                      </DateRangePicker>
                      <Col>
                        <Button type="submit">
                          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                          Search
                        </Button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Container>
              </Card>
              {reports && reports.length > 0 &&
              <ReportTable visibleReports={reports} sources={sources} tags={tags} groups={groups}></ReportTable>
              }
            </Col>
            <Col>
              <div className="d-none d-xl-block">
                <StatsBar></StatsBar>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ReportsIndex;
