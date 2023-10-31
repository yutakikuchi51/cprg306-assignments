"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient){
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok){
            console.log(response.status);
        }
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.log(error.message);
    }
}

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas(ingredient);
            setMeals(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-3xl font-bold text-orange-300 drop-shadow-md ml-4 mb-4">Meal Ideas</h2>

            <ul className="bg-green-800 p-4 rounded-lg">
                {meals && meals.map(meal => (
                    <li key={meal.idMeal} className="my-2 p-2 bg-orange-300 rounded-md hover:bg-orange-500 text-white text-lg drop-shadow-sm">{meal.strMeal}</li>
                ))}
            </ul>

        </div>
    )
}