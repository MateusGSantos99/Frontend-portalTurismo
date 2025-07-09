import React, { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email} \nSenha: ${senha}`);
    };

    return (
        <>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none 
                                       focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none 
                                       focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
                                   text-white px-6 py-2 rounded-lg transition duration-300 w-full mt-2"
                    >
                        Entrar
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Não tem conta?
                    <a
                        href="/register"
                        className="text-purple-600 hover:underline ml-1"
                    >
                        Cadastre-se
                    </a>
                </p>
            </div>
        </>
    );
};

export default LoginForm;
