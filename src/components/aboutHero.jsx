import React from 'react';

const AboutHero = (props) => {
    return (
        <>
            <div
                className='bg-cover bg-center w-full h-screen'
                style={{ backgroundImage: `url(${props.Img})` }}
            >
                <div className='text-center pt-16 text-4xl font-bold text-white'>
                    <h1>Minha experiência</h1>
                </div>
                <div className='text-center pt-8 text-lg text-white font-medium px-4 sm:px-16'>
                    <p>
                        Foi uma experiencia bem divertida, um pouco complicada no início, porém com o auxílio do professor e dos colegas, se tornou uma atividade legal de trabalhar e desenvolver. Até o momento, aprendi a usar HTML, Tailwind, CSS e React. Aprendi a
                        estilização de componentes, como tamanho, cores, fontes, e etc.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutHero;
