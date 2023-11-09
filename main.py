from flask import Flask, render_template, jsonify, request, make_response
import sys, json, os

render_templateapp = Flask(__name__)

app=Flask(__name__)
@app.route('/')
def display_homepage():
    return render_template('index.html')

if __name__ == "__main__": 
  app.run(host='0.0.0.0', port=8080)