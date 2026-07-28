import { useEffect, useState } from "react"
import { FaRegEye } from "react-icons/fa"

const DataBinding = () => {
    const [number, setNumber] = useState(2314);


    useEffect(() => {
        setNumber(1263);
    }, [number])

    const [price, setPrice] = useState(2314);
    const [views, setViews] = useState(1230000009);
    const [stock, setStock] = useState(0);


    return (
        <div>
            <h1>Data Binding</h1>
            <p>Number: {number}</p>
            <p>Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'INR' })}</p>
            <p>Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            <p>Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}</p>
            <p>Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'GBP' })}</p>
            <p>Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'JPY' })}</p>
            <p>Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'AUD' })}</p>

            <p><span><FaRegEye /></span> Views: {views.toLocaleString('en-US', { notation: 'compact' })}</p>
            <p><span><FaRegEye /></span> Views: {views.toLocaleString('en-IN', { notation: 'compact' })}</p>

            <p>{stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
        </div>
    )
}

export default DataBinding