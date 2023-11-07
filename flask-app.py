from teemil_api import TeemilAPI
from flask import Flask, request, jsonify

app = Flask('teemill-api-app')


api = TeemilAPI()

@app.route('/generate-t-shirt', methods = ['POST'])
def generateTShirt():
    
    data = request.json

    returnJSON = api.createImageTshirt(data['url']) 

    return returnJSON


if __name__ == '__main__':
    app.run()