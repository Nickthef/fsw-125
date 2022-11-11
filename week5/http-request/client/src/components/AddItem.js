import { useState } from "react";

function AddItem({submit, btnText, name, description, price, _id}) {

    const intInput = {name: name|| "", description: description|| "", price: price|| ""};
    const [input, setInput] = useState(intInput);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput(prevInput => ({...prevInput, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         submit(input, _id);
         setInput(intInput);
    }

    return (<form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        value={input.name}
        onChange={handleChange}
        placeholder="Name Here"/>
        <input
        type="text"
        name="price"
        value={input.price}
        onChange={handleChange}
        placeholder="Price Here"/>
        <input
        type="text"
        name="description"
        value={input.description}
        onChange={handleChange}
        placeholder="Description Here"/>
        <button className="addBtn">{btnText}</button>
    </form>)
};

export default AddItem;