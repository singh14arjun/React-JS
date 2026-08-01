import { useEffect, useState } from "react"
// import users from "../../public/users.json"
import axios from "axios"
const KeyEvents = () => {



    const [userName, setUserName] = useState([])
    const [user, setUser] = useState([]);
    const [message, setMessage] = useState("");
    const [progressWidth, setProgressWidth] = useState(0);
    const [password, setPassword] = useState("");

    const loadUsers = () => {
        axios.get("/users.json")
            .then((response) => {
                setUserName(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        loadUsers()
    }, [])

    function handleUserName(event) {

        var item = userName.find((user) => user.userName === event.target.value)

        if (item) {
            setMessage("User Name already exists")
        }
        else {
            setMessage("User Name Available")
        }
    }


    function verifyPassword(event) {
        if (event.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setProgressWidth(100)
        }
        else {
            if (event.target.value.length < 4) {
                setProgressWidth(35)
            }
            else {
                setProgressWidth(65)
            }
        }
    }


    function handleImage() {
        window.open("https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/t/d/-original-imahg5fyqgdfhugy.jpeg?q=70", "_blank");
        document.oncontextmenu = () => {
            alert("Right Click Disabled")
            return false;
        }
    }

    function handleSelect(e) {
        e.preventDefault();
        alert("Select Disabled");
    }

    return (
        <div>
            <h1 onMouseDown={handleSelect} style={{ userSelect: "none" }}>Key Events</h1>
            <div>
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" onKeyUp={handleUserName} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onKeyUp={verifyPassword} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                <div style={{ width: progressWidth + "%", height: "20px", backgroundColor: "gray" }}></div>
            </div>

            {
                message === "User Name already exists" ? (
                    <p style={{ color: "red" }}>{message}</p>
                ) : (
                    <p style={{ color: "green" }}>{message}</p>
                )
            }
            {/* <p>{user}</p> */}

            <div>
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/t/d/-original-imahg5fyqgdfhugy.jpeg?q=70" alt="" onDoubleClick={handleImage} />
            </div>

        </div>
    )
}

export default KeyEvents