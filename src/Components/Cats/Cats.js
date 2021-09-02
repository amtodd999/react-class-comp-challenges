import React from 'react';
import CatIndex from './CatIndex'
import { Container } from 'reactstrap';

const Cats = () => {
  return (
    <Container className="App">
      <br />
      <h1 className="App-intro">
        List of Cat Breeds:
      </h1>

      <hr />
      <CatIndex />
      {/* <ul>
        <li>Render the list of cat breeds to the screen</li>
        <li>Use props correctly</li>
        <li>Use .map() correctly</li>
        <li>Ensure there are no errors</li>
      </ul> */}
      <hr />
      
    </Container>
  );

}

export default Cats;
