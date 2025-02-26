// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen overflow-hidden bg-[#DDD9D9]">
            {/* Градиентный фон */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#CA0BAB] to-[#DDD9D9] opacity-50"></div>

            {/* Облака */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="w-96 h-96 text-white" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M70,90 C30,90 10,60 10,30 C10,0 40,-10 70,10 C100,-10 130,0 130,30 C130,60 110,90 70,90 Z" />
                </svg>
            </div>

            {/* Воздушные шарики (буквы TM) */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-[#CA0BAB]">
                <span className="balloon">T</span><span className="balloon">M</span>
            </div>

            {/* Слоган */}
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-6xl font-bold text-black mb-4">Все задачи в одном месте</h1>
                <p className="text-xl text-black mb-8">Управляйте задачами и привычками легко и эффективно</p>
                <a href="#features" className="bg-[#CA0BAB] text-white px-8 py-4 rounded-full hover:bg-[#b3009e] transition">
                    Начать бесплатно
                </a>
            </div>
        </section>
    );
};

export default Hero;