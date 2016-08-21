import { ajax } from 'jquery';

export default function alignSequences(seq1, seq2){
  return ajax('./align', {
    'type': 'GET',
    'data': {
      'seq1': seq1,
      'seq2': seq2
    }
  });
}
