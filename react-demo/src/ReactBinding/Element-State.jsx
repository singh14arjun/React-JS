import { useState } from "react"

const ElementState = () => {

    const [userName, setUserName] = useState('');

    function handleUserName(e) {
        setUserName(e.target.value);
    }

    function handleBlur() {
        setUserName(userName.toUpperCase());
    }
    return (
        <div>
            <h1>Element State</h1>

            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={userName} onBlur={handleBlur} onChange={handleUserName} /></dd>
            </dl>
            <p>Welcome, {userName}</p>
        </div>
    )
}

export default ElementState