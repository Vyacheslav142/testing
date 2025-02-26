// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 py-4 px-8 bg-white shadow-md flex justify-between items-center">
            <div className="logo text-2xl font-bold text-[#CA0BAB]">TaskMates</div>
            <nav>
                <a href="#features" className="text-gray-700 hover:text-[#CA0BAB] mx-2 transition">Особенности</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-[#CA0BAB] mx-2 transition">Как это работает</a>
                <a href="#pricing" className="text-gray-700 hover:text-[#CA0BAB] mx-2 transition">Цены</a>
            </nav>
        </header>
    );
};

export default Header;