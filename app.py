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
    seq1 = request.args.get('seq1', '')
    seq2 = request.args.get('seq2', '')
    print seq1
    print seq2

    alignment = pairwise2.align.globalxx(seq1, seq2)

    data = {
        u'results': alignment
    }
    return jsonify(**data)

if __name__ == "__main__":
    app.run()
