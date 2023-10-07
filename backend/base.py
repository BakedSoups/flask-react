# from flask import Flask

# api = Flask(__name__)

# @api.route('/profile')
# def my_profile():
#     response_body = {
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body
from flask import Flask
from flask_cors import CORS
import numpy as np  # "np" is a common alias for NumPy

api = Flask(__name__)
CORS(api)  # Add this line to enable CORS for your entire app

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I'm a full-stack developer that loves Python and JavaScript"
    }

    return response_body

if __name__ == '__main__':
    api.run(debug=True)
