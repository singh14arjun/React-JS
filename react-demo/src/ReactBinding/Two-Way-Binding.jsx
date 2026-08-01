import { useState } from "react";

const TwoWayBinding = () => {

    const [name, setName] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function changeToUpperCase() {
        setName(name.toUpperCase());
    }

    return (
        <div>
            <h1>Two Way Binding</h1>
            <label htmlFor="name">Name : </label>
            <input type="text" value={name} onChange={handleNameChange} onKeyUp={changeToUpperCase} />
            <p>Name : {name}</p>
        </div>
    )
}

export default TwoWayBinding