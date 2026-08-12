import { useEffect, useState } from "react";

export function Login() {


    useEffect(() => {
        console.log("Login component mounted");
        return () => {
            console.log("Login component unmounted");
        }
    }, []);
    return (

        <div>
            <h1>Login</h1>
        </div>
    )
}

export function Register() {

    useEffect(() => {
        console.log("Register component mounted");
        return () => {
            console.log("Register component unmounted");
        }
    }, []);
    return (
        <div>
            <h1>Register</h1>
        </div>
    )
}



export default function UseEffectDemo() {

    const [view, setView] = useState();

    function hanleLoginClick() {
        setView(<Login />);
    }

    function handleRegisterClick() {
        setView(<Register />);
    }

    return (
        <div>
            <h1>UseEffectDemo</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={hanleLoginClick}>Login</button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleRegisterClick}>Register</button>
            {view}
        </div>
    )
}