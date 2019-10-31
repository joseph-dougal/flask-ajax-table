from flask import Flask, render_template, jsonify, request
import json
import os

app = Flask(__name__)

project_dir = os.path.dirname(os.path.abspath(__file__))
my_files = r'/static/data/'
file_dir = project_dir + my_files


@app.route('/')
def index():

    json_file = file_dir + r'data_set_1.json'

    with open(json_file) as f:
        js_object = json.load(f)
        return render_template('index.html', data=js_object)


@app.route('/get_data', methods=['POST'])
def get_data_function():

    user = request.form['user']

    if user == 'two':

        json_file = file_dir + r'data_set_2.json'

        with open(json_file) as f:
            js_object = json.load(f)
            return jsonify(js_object)

    else:
        json_file = file_dir + r'data_set_1.json'

        with open(json_file) as f:
            js_object = json.load(f)
            return jsonify(js_object)


if __name__ == '__main__':
    app.run(debug=True)
