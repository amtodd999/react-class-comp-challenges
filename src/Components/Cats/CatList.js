import React, { Component } from 'react';

class CatList extends Component {
  
  render() {
    
    return (
      <div>
        <ul>
          {this.props.cats.map(cat => <li>{cat.toUpperCase()}</li>)}
        </ul>
      </div>
    )
  }
}

// const CatList = () => {
//   return (
//     <div>
//       <ul>
//       {this.props.breeds.map(cat => <li>cat</li>)}
//       </ul>
//     </div>
//   )
// }

export default CatList;
