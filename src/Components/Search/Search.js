import React from 'react';
import SearchIndex from './SearchIndex';
import { Container } from 'reactstrap';

const Search = () => {
  return (
    <Container className="App">
      <br />
      <h1 className="App-intro">
        React Search Challenge
      </h1>
      <h2>Filter the list as you type:</h2>
      <hr />
      <SearchIndex />
      <hr />

    </Container>
  );

}

export default Search;
