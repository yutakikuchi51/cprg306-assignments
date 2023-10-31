"use client"

import { useState } from "react";
// import ItemCard from "./item-card";

export default function ItemList({ items, onItemSelect }) {
    let [sortBy, setSortBy] = useState("name");

    // let itemsArray = items && items.map((item) => item.items);
    let itemsArray = items ? [...items] : [];

    // let itemsArray = [...new Set(items.map((item) => item.itemsArray).sort())];

    
    itemsArray = itemsArray.sort((a, b) => {
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        
    });


    return (
        <div>

            <div>
                <div>
                    <label className="mt-6 ml-4 mr-2 text-lg text-white">Sort by:</label>
                    <button 
                        className="mt-6 mr-4 p-2 rounded-lg drop-shadow-xl"
                        onClick={(e) => setSortBy(e.target.value)} 
                        value="name"
                        style={{backgroundColor: sortBy === "name" ? "white" : "gray"}}
                    >Name</button>
                    <button 
                        className="mt-6 p-2 rounded-lg drop-shadow-xl"
                        onClick={(e) => setSortBy(e.target.value)} 
                        value="category"
                        style={{backgroundColor: sortBy === "name" ? "gray" : "white"}}
                    >Category</button>
                </div>
            </div>
            <section>
                {itemsArray.map( (item) => (
                <div 
                    key={item.id} 
                    className="mx-4 my-6 px-3 py-3 bg-orange-300 rounded-2xl shadow-xl hover:bg-orange-400 hover:shadow-2xl"
                    onClick={() => onItemSelect(item)}>
                    <h3 className="px-3 py-1 text-2xl font-semibold bg-orange-100 rounded-xl">{item.name}</h3>
                    <p className="px-3 py-1 pt-3 text-lg"><b>Quantity: </b> {item.quantity} </p>
                    <p className="px-3 py-1 text-lg"><b>Category: </b> {item.category} </p>
                </div>))}
            </section>

        
        </div>
    )
}