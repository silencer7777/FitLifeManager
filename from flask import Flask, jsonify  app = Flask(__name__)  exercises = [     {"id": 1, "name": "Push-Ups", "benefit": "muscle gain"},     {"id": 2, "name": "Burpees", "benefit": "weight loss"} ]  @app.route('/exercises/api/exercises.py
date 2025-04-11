from flask import Flask, jsonify

app = Flask(__name__)

exercises = [
    {"id": 1, "name": "Push-Ups", "benefit": "muscle gain"},
    {"id": 2, "name": "Burpees", "benefit": "weight loss"}
]

@app.route('/exercises/<goal>', methods=['GET'])
def get_exercises(goal):
    return jsonify([e for e in exercises if e['benefit'] == goal])

if __name__ == '__main__':
    app.run(debug=True)
