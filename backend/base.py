import os
from flask import Flask, request, jsonify
from flask_cors import CORS


# app = Flask(__name__)
app = Flask(__name__)

CORS(app)  # Add this line to enable CORS for your entire app


@app.route('/questions', methods=['GET'])
def get_questions():
    page = request.args.get('page')

    # Perform any processing based on the 'page' parameter
    # For example, you can fetch questions from a database here

    # For demonstration purposes, we'll return a dummy response

    response_data_2 = {
        'page': page,
        'questions': [
            {
                'title': "how do you create a variable",
                'options': [
                    "const myVar = 10",
                    "const myVar == 10",
                    "constant myVar = 10",
                    "constant myVar == 10",
                ],
            },
            {
                'title': "what is the correct syntax",
                'options': [
                    "cout >> 'hellow orld' >> endl",
                    "cout << 'hellow orld' >> endl",
                    "cout >> 'hellow orld' << endl",
                    "cout << 'hellow orld' << endl",
                ],
            },
        ],
    }

    return jsonify(response_data_2)


@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I'm a full-stack developer that loves Python and JavaScript"
    }
    return response_body


if __name__ == '__main__':
    app.run(debug=True)
