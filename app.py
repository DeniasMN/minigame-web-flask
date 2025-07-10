from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('Website.html')

@app.route('/suit')
def suit():
    return render_template('Suit.HTML')

@app.route('/tictactoe')
def tictactoe():
    return render_template('tictactoe.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')