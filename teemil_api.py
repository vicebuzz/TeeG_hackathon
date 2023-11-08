import requests
import urllib
import base64




class TeemilAPI():

    def __init__(self):

        self.publicSafeKey = 'elCp6zR3XcWXOE49c2EIoLc0yJleaJdJ3LMrBRrX'
        self.privateKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZWVtaWxsLmNvbSIsIm5iZiI6MTY5OTI4MzI2OCwiaWF0IjoxNjk5MjgzMjY4LCJzdWIiOjMyNDMzMiwiZXhwIjo5OTk5OTk5OTk5OTksInV1aWQiOiI2NTQ5MDE0NDJlMjU4IiwidG9rZW5faWQiOjY3MSwiY3JlYXRlZF9hdCI6MTY5OTI4MzI2OH0.RSLAIp_6aCsZ3FiRDLSbRuy4J2t6KQ-ZPS6OxcwxkqM'

    def createImageTshirt(self, img_url, local):

        if not local:

            img = self.encodeImageBase64(img_url)

        else:

            img = self.encodeImageLocal(img_url)

        url = 'https://teemill.com/omnis/v3/product/create'

        payload = {
            "image_url": f"data:image/png;base64, {str(img)[2:]}"
            }
        
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer Bearer {self.publicSafeKey}"
        }

        response = requests.post(url, json=payload, headers=headers)

        #print(response.json())

        return response.json()

    
    def encodeImageBase64(self, img_url):

        r = requests.get(img_url)

        return base64.b64encode(r.content)
    
    def decodeImageBase64(self, base64_):

        with open('trash/temp.png', 'wb') as tempImgFile:
            tempImgFile.write(base64.b64decode(base64_))

    def encodeImageLocal (self, img_path):

        with open(f".{img_path.split('5000')[1]}", 'rb') as file:
            img_data = file.read()

            b64 = base64.b64encode(img_data)

            #print(b64)

        return b64
    

if __name__ == '__main__':
    api = TeemilAPI()
    #api.decodeImageBase64(api.encodeImageBase64('https://avatars.githubusercontent.com/u/43704805?s=80&v=4'))
    print(api.createImageTshirt('https://d1unuvan7ts7ur.cloudfront.net/0x600/filters:strip_exif()/4be698c3-af97-46b4-b98f-280af75b8da7/01GTWDTCEB3K9TEXY1B5YXQGZH'))
    #print(str(api.encodeImageBase64('https://avatars.githubusercontent.com/u/43704805?s=80&v=4'))[2:])