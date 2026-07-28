import { useState } from "react";

const RegularExp = () => {

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [regExPhoneNumber] = useState(/^[0-9]{10}$/);
    const [regExPassword] = useState(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    const [regExEmail] = useState(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);


    return (
        <div>
            <h1>Regular Expression</h1>
            <h2>Form Validation</h2>
            <div>
                <input type="text"
                    placeholder="Enter Phone Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)} />
                {regExPhoneNumber.test(number) ? <p></p> : <p>Invalid</p>}

                <input type="text"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                {regExPassword.test(password) ? <p></p> : <p>Invalid Password</p>}

                <input type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                {regExEmail.test(email) ? <p> </p> : <p>Invalid Email</p>}
            </div>
        </div>
    )
}

export default RegularExp;
