import React, { Component } from 'react';

class AlignmentResults extends Component {
  render(){
    let results = this.props.results;
    return (
      <div>
        {results.error && <div className="alert alert-danger" role="alert">
          <strong>Error!</strong> {results.error}
        </div>}
        <div className="jumbotron results">
          <div>{results.seq1}</div>
          <div>{results.seq2}</div>
          <br />
          <div>Score: {results.score}</div>
        </div>
      </div>
    );
  }
}

export default AlignmentResults;
