from flask import Flask, render_template, request, redirect, flash, url_for
import json

app = Flask(__name__)
app.secret_key = "Daddy Dec on the beat"

colorCode= '#ff1122'
pattern='absolute shaker'

@app.route("/")
def index():
    return render_template('test.html', colorCode=colorCode, pattern=pattern)

@app.route("/form", methods=["POST"])
def form():
    global colorCode 
    global pattern
    colorCode = request.form.get('color') #html input name parameter
    pattern = request.form.get('pattern')
    flash('Colour Changed!', category="success")
    return redirect('/')

@app.route("/query")
def query():
    dict = {}
    global colorCode
    global pattern
    for variable in ["colorCode", "pattern"]:
        dict[variable] = eval(variable)
    return dict 