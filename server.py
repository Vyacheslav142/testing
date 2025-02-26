from flask import Flask, request, jsonify

app = Flask(__name__)

# Временное хранилище задач (в памяти)
tasks_db = {}

# API для получения задач
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    user_id = request.args.get('user_id')
    tasks = tasks_db.get(user_id, [])
    return jsonify(tasks)

# API для добавления задачи
@app.route('/api/tasks', methods=['POST'])
def add_task():
    data = request.json
    user_id = data.get('user_id')
    task_text = data.get('title')

    if not user_id or not task_text:
        return jsonify({'error': 'Missing user_id or title'}), 400

    if user_id not in tasks_db:
        tasks_db[user_id] = []

    new_task = {
        'id': len(tasks_db[user_id]) + 1,
        'title': task_text,
        'completed': False
    }
    tasks_db[user_id].append(new_task)
    return jsonify({'message': 'Task added successfully', 'task': new_task}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)