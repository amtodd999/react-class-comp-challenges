import React, { Component } from 'react';
import { Input, InputGroup } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      newThings: []
    }
    //You would only need the bind if your function was NOT a fat arrow function
    //this.searchFunction = this.searchFunction.bind(this)
    //this.displaySearchTerm = this.displaySearchTerm.bind(this)
  }

  // searchFunction(value) {
  //   console.log(value)
  //   const searchTerm = this.state.things.filter(thing => thing.includes(value.toLowerCase()))
  //   this.setState({ newThings: searchTerm })
  // }

  searchFunction = (value) => {
    console.log(value)
    const searchTerm = this.state.things.filter(thing => thing.includes(value.toLowerCase()))
    this.setState({ newThings: searchTerm })
  }

  displaySearchTerm = (newThings, id) => <p key={id}>{newThings}</p>

  render() {
    return (
      <div>
        <InputGroup>
          <Input type='text' placeholder="Search" onChange={e => this.searchFunction(e.target.value)} />
        </InputGroup>
        {this.state.newThings && this.state.newThings.length > 0 ? this.state.newThings.map(this.displaySearchTerm) : this.state.things.map(this.displaySearchTerm)}
      </div>
    )
  }
}


export default SearchIndex;
