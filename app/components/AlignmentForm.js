import React, { Component } from 'react';

class AlignmentForm extends Component {
  render(){
    return (
      <div>
        <form className="form" role="form">
          <div className="form-group">
            <label>Sequence 1</label>
            <input className="form-control" type="text" id="seq1" placeholder="Sequence 1" />
          </div>

          <div className="form-group">
            <label>Sequence 2</label>
            <input className="form-control" type="text" id="seq2" placeholder="Sequence 2" />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" onClick={this.props.onSequenceAlign}>Align</button>
          </div>

        </form>
      </div>
    );
  }
}

export default AlignmentForm;
