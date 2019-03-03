from getreq import *
import requests, datetime, json, colour

color_of_the_day_url = 'https://www.pantone.com/color-intelligence/color-education/colorstrology'
hueput_api_url = 'https://d54gu4us6a.execute-api.us-east-1.amazonaws.com/dev/CoreColor'

def getColor(content):
    if content is not None:
        html_str = str(content)
        content_array = html_str.split('<section class="colorResult">')[1].split('trendLinks')[0].split("\\'")
        return content_array[7], content_array[13], content_array[17].split(' ')[1][:-1]

if __name__ == "__main__":
    content = simple_get(color_of_the_day_url)
    name, description, value = getColor(content)
    description = datetime.datetime.today().strftime('%b %d, %Y') + " Pantone's Color of the Day"

    rgb = colour.Color(value).rgb

    textvalue = "#000000"

    for v in rgb:
        if v < 0.7:
            textvalue = "#FFFFFF"
    r = requests.post(hueput_api_url, data=json.dumps({'name': name, 'description': description, 'value': value, 'textvalue':textvalue}))
    print(name, value, r.status_code)
    



