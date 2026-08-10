import { useState } from "react";
import TodoLogin from "./todo-login";
import TodoRegister from "./todo-register";

const TodoHome = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[650px]">

                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNVfGJuE9f1ReFKiad7HMsnNDEORZrHDmZPS18XlLlVbEHMtH_66H4s3mWWD805-QVv_nq7-nJxYEq_f99GhXA8w4AdwlzCKSPpfX6aRISMO_4da-d4wRbGQ0W4UzhIlh-xPONHuH-T1MOQDDziNg5cBV2_IdOcKDLDXDsMGnI7Hl7Sm80tD4XslWE75LM7H1dGph7Ebb_TIVA5fhqyMkzTMM0HSBDVwBR-W_a8tGOkCGmxFWgqyTiZWrfNGPZV4LD7n_RRhQErw"
                        alt="Task Manager"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="absolute inset-0 flex items-center justify-center px-6">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Task Manager
                            </h1>

                            <p className="text-white/80 mt-3 text-base md:text-lg">
                                Manage your tasks and stay organized
                            </p>
                        </div>
                    </div>

                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center p-6">

                    <div className="w-full max-w-md">

                        {toggle ? <TodoLogin /> : <TodoRegister />}

                        <div className="text-center">

                            <button
                                type="button"
                                onClick={() => setToggle(!toggle)}
                                className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition cursor-pointer"
                            >
                                {toggle
                                    ? "Don't have an account? Register"
                                    : "Already have an account? Login"}
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TodoHome;
