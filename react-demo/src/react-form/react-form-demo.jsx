import { useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

const ReactFormDemo = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();
    const status = useFormStatus();

    function handleSubmit(e) {
        e.preventDefault();
        startTransition(async () => {
            const error = await updateName(name);
            if (error) {
                setError(error);
                return
            }
            redirect("/path");
        })
    }

    function updateName(name) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (name === "") {
                    resolve("Name cannot be empty");
                } else {
                    resolve(null);
                }
            }, 1000);
        })
    }

    return (
        <div className="bg-gray-800 text-white p-2">
            <h1>React Form Demo</h1>
            <div>
                <input value={name} onChange={(event) => setName(event.target.value)} className="bg-gray-200 rounded mx-2 p-2" />
                <button onClick={handleSubmit} disabled={status.pending} className="bg-blue-500 rounded mx-2 p-2">
                    {status.pending ? "Updating..." : "Update"}
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    )
}

export default ReactFormDemo