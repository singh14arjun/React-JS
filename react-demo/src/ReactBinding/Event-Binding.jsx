const EventBinding = () => {


    function defaultArgumentFunction(e) {
        console.log("Default argument function");

        console.log(`Button Name : ${e.target.name}`);
        console.log(`Button ID : ${e.target.id}`);
        console.log(`Button Type : ${e.target.type}`);
        console.log(`Button Class : ${e.target.className}`);
        console.log(`Button Text : ${e.target.innerText}`);
        console.log(`Button Xposiotn :${e.clientX}`);


    }

    function customArgumentFunction(args) {
        console.log("Custom argument function");
        console.log(`Name : ${args.name}`);
        console.log(`ID : ${args.id}`);
    }

    function customAndDefaultArgumentFunction(e, args) {
        console.log("Custom and default argument function");
        console.log(`Custom Args Name : ${args.name}`);
        console.log(`Button InnerText : ${e.target.innerText}`);
        console.log(`ID : ${args.id}`);
    }
    return (
        <div>
            <h1>Event Binding</h1>
            <button className="bg-cyan-400 p-2 rounded-lg cursor-pointer m-2" onClick={defaultArgumentFunction}>Default Argument Function</button>
            <button className="bg-cyan-400 p-2 rounded-lg cursor-pointer m-2" onClick={() => customArgumentFunction({ name: "Custom", id: "123" })}>Custom Argument Function</button>
            <button className="bg-cyan-400 p-2 rounded-lg cursor-pointer m-2" onClick={(e) => customAndDefaultArgumentFunction(e, { name: "Custom", id: "123" })}>Custom and Default Argument Function</button>
        </div>
    )
}

export default EventBinding