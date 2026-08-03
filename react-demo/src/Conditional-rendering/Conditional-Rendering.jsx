import { useState } from "react";

const ConditonalRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }

    const menuList = [
        {
            id: 1,
            name: "Home",
            url: "#"
        },
        {
            id: 2,
            name: "About",
            url: "#"
        },
        {
            id: 3,
            name: "Contact",
            url: "#"
        }
    ]

    return (
        <div>
            <h1>Conditonal Rendering</h1>
            <header className="flex justify-between bg-gray-200 p-4 items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/019/136/319/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="loading" style={{ width: "100px", height: "50px", borderRadius: "50%" }} />
                <div className="flex items-center justify-between gap-5">
                    {
                        menuList.map((item, index) => {
                            return (
                                <p key={index}>{item.name}</p>
                            )
                        })
                    }
                </div>
                {
                    isLoggedIn ? (
                        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600 transition-all duration-300">Logout</button>
                    ) : (
                        <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-600 transition-all duration-300">Login</button>
                    )
                }

            </header>

            <main>
                {isLoggedIn ? (
                    <p>Welcome to the dashboard</p>
                ) : (
                    <div className="flex flex-col gap-2 items-center justify-center mt-10 bg-green-100 p-4 rounded-md w-1/3 mx-auto shadow-lg shadow-green-500/50">

                        <p>Please login to continue</p>
                        <div className="flex flex-col gap-2">
                            <input type="email" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2" />
                            <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2" />
                            <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded-md">Login</button>
                        </div>
                    </div>
                )}
            </main>

        </div>
    )
}

export default ConditonalRendering;