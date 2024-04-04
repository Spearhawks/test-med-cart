import { useEffect, useState } from "react"
import { Recipe } from "../types/Recipe"


export const GetRecipes = () => {
    
    const BASE_URL = "https://iths-2024-recept-grupp1-r469p0.reky.se/recipes";
    
   
    const [recipes, setRecipe] = useState<Recipe[]>([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(BASE_URL);
            const recipe = await response.json();
            setRecipe(recipe);
        };
        fetchRecipes();
    }, []);
    return recipes;
}