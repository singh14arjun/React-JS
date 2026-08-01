const EventLoop = () => {

    const handleClick = () => {
        console.log("Button clicked");

        setTimeout(() => {
            console.log("setTimeout after 2 seconds");
        }, 2000);

        Promise.resolve().then(() => {
            console.log("Promise");
        });

        // console.log("End");
    }

    return (


        <div>
            <h1>Event Loop</h1>
            <button className="bg-gray-400 p-2 rounded-lg cursor-pointer" onClick={handleClick}>Click me</button>
        </div>
    )
}

export default EventLoop