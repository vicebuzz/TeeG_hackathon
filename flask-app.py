import os
from teemil_api import TeemilAPI
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

api = TeemilAPI()

@app.route('/')
def home():
    print(os.listdir())
    return render_template('gen-ai-page.html')

@app.route('/generate-t-shirt', methods = ['POST'])
def generateTShirt():
    
    data = request.json

    returnJSON = api.createImageTshirt(data['url']) 

    return returnJSON


if __name__ == '__main__':
    app.run()