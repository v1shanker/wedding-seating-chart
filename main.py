from flask import Flask, render_template

app = Flask(__name__)


TEST_NAME_TABLE = {
    'Adam Armstrong': 1,
    'Becca Bradley': 2,
    'Charles Chaplain': 1,
    'Deirdre Dunn': 2,
}

@app.route('/')
def base():
    return render_template('dropdown.html', guests = list(TEST_NAME_TABLE.keys()))

