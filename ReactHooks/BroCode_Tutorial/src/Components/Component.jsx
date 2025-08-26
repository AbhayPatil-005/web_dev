// This component demonstrates handling multiple input types in React using state and onChange events.
// It includes text input, number input, textarea, select dropdown, and radio buttons.
// Each input's value is managed by its own state variable, and changes are handled by specific functions.
// The current values of the inputs are displayed below them.
// This approach ensures that the UI is always in sync with the state.

import { useState } from "react"

const MyComponent = ()=>{
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1) 
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    const handleChangeName = (event)=>{
        setName(event.target.value)
    }
    const handleChangeQuantity = (event)=>{
        setQuantity(event.target.value)
    }   
    const handleChangeComment = (event)=>{
        setComment(event.target.value)
    }

    const handleChangePayment = (event)=>{
        setPayment(event.target.value)  
    }

    const handleChangeShipping = (event)=>{
        setShipping(event.target.value) 
    }


    return(
        <>
            <input type="text" value={name} onChange={handleChangeName} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleChangeQuantity} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleChangeComment} placeholder="Enter the delivery instructions"/>
            <p>Comment: {comment}</p> 

            <select value={payment} onChange={handleChangePayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick up" checked={shipping==="Pick up"} onChange={handleChangeShipping}/>
                Pick up
            </label><br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleChangeShipping}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    )   
}
export default MyComponent;
