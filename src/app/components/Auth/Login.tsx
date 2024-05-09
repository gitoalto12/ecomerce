
import Link from 'next/link';

const Login: React.FC = () => {


    // function Login() {
    return (

        <div className="max-w-sm mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center space-x-2">
                <span>Tecnomedyc</span>
                <span className="text-blue-500">▶</span>
            </h2>

            <form>
                <div className="mb-4">

                    <input
                        type="email"
                        placeholder="Correo electronico"
                        className="w-full p-3 border border-zinc-300 focus:border-blue-500 outline-none rounded-lg"
                    />
                </div>

                <div className="mb-4 relative">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-3 border border-zinc-300 focus:border-blue-500 outline-none rounded-lg pr-10"
                    />

                    <span className="absolute inset-y-0 right-3 flex items-center text-zinc-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"

                            />
                        </svg>
                    </span>
                </div>
                <div className="mb-6 text-right">
                    <a href="#" className="text-blue-500">¿Se te olvidó la contraseña?</a>
                </div>
                <button type="submit" className="w-full bg-black text-white p-3 rounded-lg mb-4">Continue</button>
                <div className="text-center mb-4">
                    <span>¿No tienes una cuenta?
                        <Link href="/about" className="text-blue-500" >
                            Registrarse

                        </Link>
                    </span>
                </div>
                <div className="text-center mb-4">
                    <span className="text-zinc-400">o regístrate usando</span>
                </div>
                <button
                    type="button"
                    className="w-full bg-red-600 text-black p-2 rounded-lg mb-2 border border-zinc-300 flex items-center justify-center"
                >
                    <a className='text-white font-bold text-3xl pr-2'>G </a>

                    <a className='text-white '>
                        Continue con Google
                    </a>

                </button>

            </form>

        </div>


    );

    // }
};

export default Login;
/*
            <form>
              
                <div className="mb-4 relative">
                   
                    <span className="absolute inset-y-0 right-3 flex items-center text-zinc-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9.75a3 3 0 11-6 0 3 3 0 016 0zm0 0a6.375 6.375 0 11-7.5 6.225M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                </div>
                <div className="mb-6 text-right">
                    <a href="#" className="text-blue-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full bg-black text-white p-3 rounded-lg mb-4">Continue</button>
                <div className="text-center mb-4">
                    <span>Don't have an account? <a href="#" className="text-blue-500">Sign up</a></span>
                </div>
                <div className="text-center mb-4">
                    <span className="text-zinc-400">OR</span>
                </div>
                <button
                    type="button"
                    className="w-full bg-white text-black p-3 rounded-lg mb-2 border border-zinc-300 flex items-center justify-center"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google logo"
                        className="w-5 h-5 mr-2"
                    />
                    Continue with Google
                </button>
                <button
                    type="button"
                    className="w-full bg-white text-black p-3 rounded-lg border border-zinc-300 flex items-center justify-center"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                        alt="Microsoft logo"
                        className="w-5 h-5 mr-2"
                    />
                    Continue with Microsoft
                </button>
            </form>*/
