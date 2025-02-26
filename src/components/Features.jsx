// src/components/Features.jsx
import React from 'react';

const Features = () => {
    return (
        <section id="features" className="py-16 bg-[#DDD9D9]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-black mb-8">Почему TaskMates?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="assets/icons/reminders.png" alt="Умные напоминания" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-black mb-2">Умные напоминания</h3>
                        <p className="text-gray-600">Бот звонит, если задача не выполнена.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="assets/icons/habits.png" alt="Трекер привычек" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-black mb-2">Трекер привычек</h3>
                        <p className="text-gray-600">Формируйте привычки через Telegram.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="assets/icons/sync.png" alt="Синхронизация" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-black mb-2">Синхронизация</h3>
                        <p className="text-gray-600">Данные доступны и в боте, и на сайте.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;