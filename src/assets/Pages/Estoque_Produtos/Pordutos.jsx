import React, { useState, useEffect } from "react";
import api from "../../../../services/api";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever , MdExposurePlus1 ,MdExposureNeg1   } from "react-icons/md";

function Produtos() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [produtos, setProdutos] = useState([]);


    const buscarProdutos = async () => {
        try {
            const res = await api.get('/meus-produtos', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProdutos(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        buscarProdutos();
    }, []);


    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            await api.post(
                '/produto',
                { nome, quantidade },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNome('');
            setQuantidade(1);
            buscarProdutos();
        } catch (err) {
            console.error(err);
            alert("Erro ao cadastrar produto, produto existente.");
        }
    };


    const atualizarQuantidade = async (id, novaQtd) => {
        try {
            await api.put(
                `/produto/${id}`,
                { quantidade: novaQtd },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            buscarProdutos();
        } catch (err) {
            console.error(err);
        }
    };


    const excluirProduto = async (id) => {
        try {
            await api.delete(`/produto/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            buscarProdutos();
        } catch (err) {
            console.error(err);
        }
    };

    
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (

        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-10" >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-center ">Produtos</h2>
                    <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                        Sair
                    </button>
                </div>

                <form onSubmit={handleCadastro} className="space-y-4 mb-6">
                    <input
                        type="text"
                        placeholder="Nome do produto"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number" 
                        placeholder="Quantidade"
                        value={quantidade} min={0}
                        onChange={(e) => setQuantidade(Number(e.target.value))}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        Cadastrar
                    </button>
                </form>

                <ul className="space-y-2">
                    {produtos.map((p) => (
                        <li key={p.id} className="p-2 border rounded-md bg-gray-50 flex justify-between items-center">
                            <div>
                                <span className="font-semibold mr-2  uppercase">{p.nome}</span>
                                <span>Quantidade: {p.quantidade}</span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => atualizarQuantidade(p.id, p.quantidade + 1)}
                                    className="bg-green-500 text-white px-2 py-1 rounded  hover:bg-green-600"
                                >
                                 <MdExposurePlus1 />

                                </button>
                                <button
                                    onClick={() => atualizarQuantidade(p.id, p.quantidade - 1)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                                >
                                   <MdExposureNeg1 />
                                </button>
                                <button
                                    onClick={() => excluirProduto(p.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                   <MdDeleteForever />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Produtos;
