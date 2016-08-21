import React, { Component } from 'react';
import { render } from 'react-dom';

import AlignmentForm from './components/AlignmentForm';
import AlignmentResults from './components/AlignmentResults';

import alignSequences from './utils/align';

class App extends Component {
  constructor(props){
    super(props);

    this.onSequenceAlign = this.onSequenceAlign.bind(this);
    this.onSequenceUpdate = this.onSequenceUpdate.bind(this);

    this.state = {
      seq1: 'ACCGT',
      seq2: 'ACG',
      results: []
    };
  }

  onSequenceAlign(e){
    e.preventDefault();
    let { seq1, seq2 } = this.state;
    alignSequences(seq1, seq2).then((response) => {
      // console.log(response);
      let result = response.results[0];
      this.setState({
        results: [result[0], result[1]]
      });
    });
  }

  onSequenceUpdate(e){
    if (e.target.name === 'seq1'){
      this.setState({
        'seq1': e.target.value
      });
    }

    if (e.target.name === 'seq2'){
      this.setState({
        'seq2': e.target.value
      });
    }
  }

  render(){
    return (
      <div>
        <AlignmentForm
          onSequenceAlign={this.onSequenceAlign}
          onSequenceUpdate={this.onSequenceUpdate}
          seq1={this.state.seq1}
          seq2={this.state.seq2}/>
        <hr />
        <AlignmentResults results={this.state.results}/>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('root')
);
