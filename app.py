from flask import Flask, render_template, send_from_directory, jsonify, request
app = Flask(__name__, static_url_path='')

from Bio import pairwise2

@app.route('/')
def index():
    return render_template('index.html')

# hack for development, routes should be handled by web server in production
@app.route('/static/<path:filename>')
def send_static(filename):
    return send_from_directory('static', filename)


@app.route('/align')
def align():
    seq1 = request.args.get('seq1', u'')
    seq2 = request.args.get('seq2', u'')

    data = {
        u'seq1': seq1,
        u'seq2': seq2
    }
    if len(seq1) == 0 or len(seq2) == 0:
        data['results'] = {
            u'error': u'Both sequences must contain characters'
        }

    results = pairwise2.align.globalxx(seq1, seq2)
    if len(results) > 0:
        results = sorted(results, key=lambda x: x[2], reverse=True)
        alignment = results[0]
        data['results'] = {
            u'seq1': alignment[0],
            u'seq2': alignment[1],
            u'score': alignment[2]
        }

    return jsonify(**data)

if __name__ == "__main__":
    app.run()
