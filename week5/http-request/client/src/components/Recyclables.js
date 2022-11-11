import { useState } from "react";
import AddItem from "./AddItem";

function Recyclables(name, description, price, _id, deleteItems, updateItems) {
    const [updateToggle, setUpdateToggle] = useState(false);

    return (
        <div className="items">
            {!updateToggle ?
            <>
            <p>Item: {name}</p>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button 
                onClick={() => deleteItems(_id)} 
                className="Btn-1">
                Delete
            </button>
            <button 
                onClick={() => setUpdateToggle(prevToggle => ! prevToggle)} 
                className="Btn
            -2">Update</button>
            </>
            :
            <>
            <AddItem
            name = {name}
            description = {description}
            price = {price}
            _id = {_id}
            submit = {updateItems}/>
            <button className="closeBtn" onClick={() => setUpdateToggle(prevToggle => ! prevToggle)}>Close</button>
            </>}
        </div>
    )
}

export default Recyclables;