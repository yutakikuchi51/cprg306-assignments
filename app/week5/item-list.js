"use client"

import { useState } from "react";
import ItemCard from "./item-card";
import itemsData from "./items.json";

export default function ItemList() {
    
    let itemsArray = itemsData.map( (item) => ({...item}));

    let [sortBy, setSortBy] = useState("name");

    
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
                {itemsArray.map( (item) => (<ItemCard key={item.id} item={item} />))}
            </section>

        
        </div>
    )
}