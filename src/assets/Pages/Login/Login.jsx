
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import api from "../../../../services/api.js";
import { FiMail, FiLock } from "react-icons/fi"



function Login() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);


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
        e.preventDefault();

        try {
            const response = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });





            const token = response.data.token;
            localStorage.setItem("token", token);

            navigate("/Produto");
        } catch (err) {
            alert("Senha ou Email Incorretos");
        }
    }



    return (



            <form onSubmit={handleSubmit}>

                <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 " >
                    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md ">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center ">Faça seu login</h2>
                        <div className='relative ' >
                            <FiMail className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-500 size-5  " />

                            <input onChange={handleChange}

                                type="email" ref={emailRef}

                                placeholder="Email"
                                className={`border-2 rounded-lg mb-6 p-3 w-full outline-none transition pl-10
                                
            ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500  "}
            `}
                            />
                        </div>
                        
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            <div className='relative '>
                            <FiLock className="absolute  left-3 top-1/5 -translate-y-1/2 text-gray-500 size-5  " />
                            <input ref={passwordRef}

                                type="password"
                                placeholder="Senha"
                                className="w-full mb-6 p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 pl-10"
                            />
                            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition cursor-pointer  ">

                                Login
                            </button>
                        </div>

                        <Link className="flex justify-center font-bold py-2 font-serif hover:underline , hover:text-red-400 " to='/Cadastro'>Fazer Cadastro</Link>

                    </div>
                </div >
            </form>

        )
}


export default Login
