import requests
import time
for i in range(5):
    response = requests.get("http://127.0.0.1:5000/query")
    print(response)
    print(type(response.json()))
    time.sleep(1)

def hexToRGB(hex):
    hex = hex.lstrip('#')
    rgb= tuple(int(hex[i:i+2], 16) for i in (0, 2, 4))