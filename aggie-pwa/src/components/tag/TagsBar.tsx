import React from "react";
import {Jumbotron, Container} from "react-bootstrap";
const ENDPOINT = "http://localhost:3000";

interface IProps {
  tags: Tag[] | [];
}

interface IState {

}

const TagsBar = (props: IProps) => {

  return (
      <div>
        <Jumbotron fluid={true}>
          <Container>
            Tags
          </Container>
        </Jumbotron>
      </div>
  );
}

export default TagsBar;
