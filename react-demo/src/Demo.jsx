import { useState } from "react"

const Demo = () => {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

    const elementList = []
    numbers.forEach((element, index) => {
        elementList.push(<p key={index}>{element.toString()}</p>)
    })

    return (
        <div>
            <h1>Demo Data for Array method</h1>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{index + 1}.{number}</li>
                ))}
            </ul>
            <div>
                {elementList}
            </div>
        </div>
    )
}

export default Demo