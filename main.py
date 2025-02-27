from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes
import logging
import json
import os
import requests
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes

# Вставьте ваш токен здесь
TOKEN = '8028508379:AAFCHyYFPLenaR0o3pngVtiaVkqYycGxx_Q'
MINI_APP_URL = 'https://your-replit-project.repl.co'  # Замените на ваш Replit URL
# Команда /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("Открыть мини-приложение", web_app=MINI_APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Привет! Нажмите кнопку ниже, чтобы открыть мини-приложение.", reply_markup=reply_markup)

def main():
    application = Application.builder().token(TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    print("Бот запущен...")
    application.run_polling()

if __name__ == '__main__':
    main()