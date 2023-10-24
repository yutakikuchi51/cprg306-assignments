"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {

    const[items, setItems] = useState(
        itemsData.map((item) => ({
            ...item
        }))
    );

    const [newItemOpen, setNewItemOpen] = useState(false);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleCloseAddItem = () => {
        setNewItemOpen(false);
    }

    
    return (
        <main className="bg-green-900">
            <h1 className="mx-4 pt-4 text-5xl font-bold text-orange-300 drop-shadow-xl">Shopping List</h1>
            <div>
                <button
                  style={{ position: "fixed !important", right: "20px !important", bottom: "20px !important" }}
                  className="bg-yellow-500 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-2 rounded-full w-20 h-20 flex items-center justify-center"
                  onClick={() => setNewItemOpen(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                        ></path>
                    </svg>
                    </button>  
            </div>

            {newItemOpen && (
                <NewItem onAddItem={handleAddItem}
                onCloseAddItem={handleCloseAddItem}/>
            )}

            <ItemList items={items}/>
            
        </main>
    );
}