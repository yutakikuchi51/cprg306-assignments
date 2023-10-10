"use client"

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [itemsEntered, setItemsEntered] = useState(false);

    const handleSubmit = (item) => {
        item.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setItemsEntered(true);

        setName("");
        setQuantity(1);
        setCategory("produce");

        setItemsEntered(false)
    };

    const handleNameChange = (item) => {
        setName(item.target.value)
    };

    const handleQuantityChange = (item) => {
        setQuantity(item.target.value)
    };

    const handleCategoryChange = (item) => {
        setCategory(item.target.value)
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-700 flex items-center justify-center">
                {itemsEntered && (
                    <div>
                        <p>Name: {name}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Category: {category}</p>
                    </div>
                )}
                <div className="w-full max-w-md h-50 p-5 bg-blue-400 rounded-2xl shadow-xl">
                    <h1 className="mb-3 text-3xl font-bold text-white">
                        Add New Items
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label className="p-3 text-lg">
                            <span>Name: </span>
                            <input
                                required
                                onChange={handleNameChange}
                                value={name}
                                className="rounded border border-black" 
                            />
                        </label>

                        <label className="p-3 text-lg">
                            <span>Quantity: </span>
                            <input
                                required
                                onChange={handleQuantityChange}
                                min="1"
                                max="99"
                                value={quantity}
                                type="number"
                                className="rounded border border-black"
                            />
                        </label>

                        <label className="p-3 text-lg">
                            <span>Category: </span>
                            <select onChange={handleCategoryChange} className="rounded">
                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                        
                        <button type="submit" className="w-50 h-10 m-1 p-5 bg-gray-200 flex items-center justify-center rounded-2xl hover:bg-gray-500 hover:text-white" >
                            Add Items
                        </button>

                    </form>

                </div>

            </div>
        </div>
    );
}