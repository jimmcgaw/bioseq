import React, { Component } from 'react';

class AlignmentForm extends Component {
  render(){
    let { seq1, seq2, onSequenceUpdate, onSequenceAlign } = this.props;
    return (
      <div>
        <form className="form" role="form">
          <div className="form-group">
            <label>Sequence 1</label>
            <input required name="seq1" className="form-control" type="text" id="seq1" placeholder="Sequence 1" value={seq1} onChange={onSequenceUpdate} />
          </div>

          <div className="form-group">
            <label>Sequence 2</label>
            <input required name="seq2" className="form-control" type="text" id="seq2" placeholder="Sequence 2" value={seq2}  onChange={onSequenceUpdate} />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" onClick={onSequenceAlign}>Align</button>
          </div>

        </form>
      </div>
    );
  }
}

export default AlignmentForm;
