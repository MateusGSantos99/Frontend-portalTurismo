import React from 'react';

const Hero = ({ Background, titulo, paragrafo, rota, botao }) => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center px-4"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{titulo}</h1>
            <p className="text-lg md:text-xl mb-6">{paragrafo}</p>
            <a
                href={rota}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-full transition duration-300"
            >
                {botao}
            </a>
        </div>
    );
};

export default Hero;
