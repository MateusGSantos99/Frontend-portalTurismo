import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-purple-700 via-blue-500 to-blue-600 text-white py-4 px-4 shadow-lg mt-auto">
            <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm">Nova Serra Verde. Todos os direitos reservados</p>
                </div>

                <div className="flex space-x-6 text-xl">
                    <a href="#" className="hover:text-blue-300 transition-colors duration-300"><FaFacebookF /></a>
                    <a href="#" className="hover:text-blue-300 transition-colors duration-300"><FaWhatsapp /></a>
                    <a href="#" className="hover:text-blue-300 transition-colors duration-300"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
