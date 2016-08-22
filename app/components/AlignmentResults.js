import React, { Component } from 'react';

class AlignmentResults extends Component {
  render(){
    let results = this.props.results;
    return (
      <div className="jumbotron results">
        <div>{results.seq1}</div>
        <div>{results.seq2}</div>
        <br />
        <div>Score: {results.score}</div>
      </div>
    );
  }
}

export default AlignmentResults;
