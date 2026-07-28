import { useState } from "react";
import moment from "moment";

const DateTime = () => {
    const [departureDate] = useState(new Date());
    return (
        <div>
            <h1>{departureDate.toLocaleDateString()}</h1>
            <h1>{departureDate.toLocaleTimeString()}</h1>
            <h1>{departureDate.toLocaleString()}</h1>
            <h1>{moment(departureDate).format("YYYY-MM-DD")}</h1>
            <h1>{moment(departureDate).format("HH:mm:ss")}</h1>
            <h1>{moment(departureDate).format("YYYY-MM-DD HH:mm:ss")}</h1>
            <h1>{moment(departureDate).format("DD-MM-YYYY")}</h1>
            <h1>{moment(departureDate).format("hh:mm:ss A")}</h1>
            <h1>{moment(departureDate).format("DD-MM-YYYY hh:mm:ss A")}</h1>
        </div>
    )
}
export default DateTime;