from flask import Flask, render_template, send_from_directory
app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
    return render_template('index.html')

# hack for development, routes should be handled by web server in production
@app.route('/static/<path:filename>')
def send_static(filename):
    return send_from_directory('static', filename)


if __name__ == "__main__":
    app.run()
