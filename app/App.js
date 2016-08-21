import React, { Component } from 'react';
import { render } from 'react-dom';

import AlignmentForm from './components/AlignmentForm';

class App extends Component {
  constructor(props){
    super(props);

    this.onSequenceAlign = this.onSequenceAlign.bind(this);

    this.state = {

    };
  }

  onSequenceAlign(e){
    e.preventDefault();
    console.log(e);
  }

  render(){
    return (
      <div>
        <AlignmentForm onSequenceAlign={this.onSequenceAlign}/>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('root')
);
