import React from "react";

// Componente funcional CardService que recebe props para renderizar um cartão de serviço/ponto turístico
const CardService = (props) => {
    return (
        <>
            {/* Container principal do card com largura máxima responsiva e estilos de borda, sombra e arredondamento */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white 
                            border-gray-200 rounded-2xl shadow-md overflow-hidden m-2 flex flex-col ml-auto mr-auto">
                
                {/* Imagem do cartão com largura total, altura responsiva e estilo para cobrir o espaço disponível */}
                <img
                    src={props.img}    // Fonte da imagem passada via props
                    alt={props.alt}    // Texto alternativo da imagem (acessibilidade)
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />

                {/* Container interno para conteúdo textual com padding e layout em coluna que cresce para preencher o espaço */}
                <div className="p-4 flex flex-col flex-grow">
                    
                    {/* Título do cartão com tamanho de texto responsivo e fonte em negrito */}
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-950">{props.titulo}</h1>

                    {/* Descrição do cartão com cor cinza e margem superior */}
                    <p className="text-gray-800 mt-2 text-sm sm:text-base">{props.descricao}</p>

                    {/* Link estilizado como botão com fundo em degradê roxo-azul */}
                    <a
                        href={props.link}
                        className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white 
                                   px-4 py-4 rounded-3xl text-center hover:from-purple-700 hover:to-blue-600 
                                   transition duration-300"
                    >
                        {props.botao}
                    </a>
                </div>
            </div>
        </>
    );
};

export default CardService;
