import { useState } from "react"

const ReactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleCity(e) {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, city);
    }

    const handleReset = () => {
        setName("");
        setEmail("");
        setCity("");
    }
    return (
        <div>
            <h1>React Form</h1>
            <div className="form-container">
                <div>
                    <dt>Name :</dt>
                    <dd>
                        <input type="text" value={name} onChange={handleName} />
                    </dd>
                </div>
                <div>
                    <dt>Email :</dt>
                    <dd>
                        <input type="email" value={email} onChange={handleEmail} />
                    </dd>
                </div>
                <div>
                    <dt>City :</dt>
                    <dd>
                        <select name="" id="" value={city} onChange={handleCity}>
                            <option value="">Select City</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Surat">Surat</option>
                            <option value="Vadodara">Vadodara</option>
                        </select>
                    </dd>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
                <button type="reset" className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default ReactForm