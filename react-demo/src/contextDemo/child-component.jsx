const ChildComponent = ({ handleMsg }) => {
    function handleChildMessage() {
        handleMsg("Hello from child");
    }
    return (
        <div className="bg-gray-200 p-4">
            <h1>Child Component</h1>
            <button onClick={handleChildMessage} className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
        </div>
    )
}

export default ChildComponent;