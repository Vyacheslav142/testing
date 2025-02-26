// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 mt-16">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 TaskMates. Все права защищены.</p>
                <div className="mt-4">
                    <a href="#" className="text-[#CA0BAB] hover:text-[#b3009e] mx-2 transition">Политика конфиденциальности</a>
                    <a href="#" className="text-[#CA0BAB] hover:text-[#b3009e] mx-2 transition">Условия обслуживания</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;