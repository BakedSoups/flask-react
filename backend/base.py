import os
from flask import Flask
from flask_cors import CORS


# app = Flask(__name__)
app = Flask(__name__)

CORS(app)  # Add this line to enable CORS for your entire app


@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I'm a full-stack developer that loves Python and JavaScript"
    }
    return response_body


if __name__ == '__main__':
    app.run(debug=True)
