import React, { Component } from 'react';

class AlignmentResults extends Component {
  render(){
    return (
      <div className="jumbotron results">
        {this.props.results.map( (result) => {
          return <div>{result}</div>;
        } )}
      </div>
    );
  }
}

export default AlignmentResults;
