import React from 'react';
import { Container } from 'reactstrap';
import DogIndex from './DogIndex'

const Dogs = (props) => {

  return (
    <Container className="App">
      <br />
      <h1 className="App-intro">
        Dog pic api
      </h1>
      <hr />
      <DogIndex />
      <hr />
    </Container>
  );

}

export default Dogs;
