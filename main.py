from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes
import logging
import json
import os
import requests
# Вставьте ваш токен здесь
TOKEN = '8028508379:AAFCHyYFPLenaR0o3pngVtiaVkqYycGxx_Q'
API_URL = 'http://127.0.0.1:5000 '  # URL вашего сервера
# Настройка логирования
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Путь к файлу базы данных
DB_PATH = 'tasks.json'

# Чтение задач из базы данных
def read_tasks():
    if not os.path.exists(DB_PATH):
        with open(DB_PATH, 'w') as f:
            json.dump({}, f)
    with open(DB_PATH, 'r') as f:
        return json.load(f)

# Запись задач в базу данных
def write_tasks(data):
    with open(DB_PATH, 'w') as f:
        json.dump(data, f, indent=2)
# Команда /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Привет! Я TaskMates — ваш помощник для управления задачами и привычками. "
                                    "Используйте /help, чтобы узнать больше.")

# Команда /help
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Вот что я умею:\n"
                                    "/start — начать работу\n"
                                    "/help — показать это сообщение\n"
                                    "/add_task — добавить задачу\n"
                                    "/list_tasks — показать список задач")

# Команда /add_task
async def add_task(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = str(update.message.from_user.id)
    task_text = " ".join(context.args)

    if not task_text:
        await update.message.reply_text("Пожалуйста, укажите задачу после команды. Например: /add_task Сделать отчет")
        return

    response = requests.post(f'{API_URL}/tasks', json={'user_id': user_id, 'title': task_text})
    if response.status_code == 201:
        await update.message.reply_text(f"Задача добавлена: {task_text}")
    else:
        await update.message.reply_text("Произошла ошибка при добавлении задачи.")

# Команда /list_tasks
async def list_tasks(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = str(update.message.from_user.id)
    response = requests.get(f'{API_URL}/tasks', params={'user_id': user_id})

    if response.status_code == 200:
        tasks = response.json()
        if not tasks:
            await update.message.reply_text("У вас пока нет задач.")
            return

        tasks_list = "\n".join([f"{i + 1}. {task['title']} [{'✅' if task['completed'] else '❌'}]" for i, task in enumerate(tasks)])
        await update.message.reply_text(f"Ваши задачи:\n{tasks_list}")
    else:
        await update.message.reply_text("Произошла ошибка при получении задач.")

# Обработка ошибок
async def error_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    logger.error(msg="Exception while handling an update:", exc_info=context.error)

# Основная функция
def main():
    # Создаем приложение
    application = Application.builder().token(TOKEN).build()

    # Регистрируем обработчики команд
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("add_task", add_task))
    application.add_handler(CommandHandler("list_tasks", list_tasks))

    # Регистрируем обработчик ошибок
    application.add_error_handler(error_handler)

    print("Бот запущен...")
    application.run_polling()

if __name__ == '__main__':
    main()