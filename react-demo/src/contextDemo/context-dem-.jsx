import { createContext, useContext, useState } from "react"
import ParentComponent from "./parent-component";

let UserContext = createContext(null);

export function Level1() {
    let context = useContext(UserContext);
    return (
        <div className="bg-gray-200 p-4">
            <h1>Level 1</h1>
            <p>{context}</p>
            <Level2 />
        </div>
    )
}

export function Level2() {
    let context = useContext(UserContext);
    return (
        <div className="bg-gray-300 p-4">
            <h1>Level 2</h1>
            <p>{context}</p>
        </div>
    )
}
export function ContextDemo() {
    const [name, setName] = useState('');
    function handleNameChange(e) {
        setName(e.target.value);
    }
    return (
        <div className="bg-gray-100 p-4">
            <input type="text" value={name} onChange={handleNameChange} />
            <h1>Context Demo</h1>
            <UserContext value={name}>
                <Level1 />
            </UserContext>

            <ParentComponent />
        </div>
    )
}