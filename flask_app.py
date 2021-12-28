from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/clock')
def clock():
  return render_template('clock.html')

@app.route('/toDo')
def toDo():
  return render_template('toDo.html')