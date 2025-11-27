
import { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import api from "../../../../services/api";

function Cadastro() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
   

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Expressão regular simples para validar e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value && !emailRegex.test(value)) {
            setError("E-mail inválido");
        } else {
            setError("");
        }
    };



    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()


        try {
            await api.post('/cadastro', {
                email: emailRef.current.value,
                password: passwordRef.current.value

            })

        

            alert("Usuário Cadastrado Com Sucesso")
        } catch (err) {

            alert('Erro ao cadastrar Usuário')
        }


    }

    return (

        <div>

            <form onSubmit={handleSubmit}>

                <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
                    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Faça seu Cadastro</h2>
                        <input ref={emailRef} 
                            type="email" onChange={handleChange}
                            placeholder="Email"
                            className={`border-2 rounded-lg mb-6 p-3 w-full outline-none transition
          ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500"}
        `}
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <input ref={passwordRef}
                            type="password"
                            placeholder="Senha"
                            className="w-full mb-6 p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                        <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition cursor-pointer">
                            Cadastrar
                        </button>


                        <Link className="flex justify-center font-bold py-2 font-serif hover:text-red-400" to="/Login" >Já tem uma conta? Faça login </Link>



                    </div>

                </div>

            </form>
        </div>
    )

}


export default Cadastro