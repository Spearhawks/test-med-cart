import { useState } from "react";
import { MenuItemCards } from "./MenuItemCards";
import { Recipe } from "../types/Recipe";
import { GetRecipes } from "../data/GetRecipes";

export const Storepage = () => {
  const filters: string[] = [
    "All",
    "Nötkött",
    "Vegetariskt",
    "Skaldjur",
    "Fläskkött",
    "Sides",
    "Efterrätt",
  ];
  const [filteredRecipes, setRecipes] = useState<Recipe[]>([]);
  const recipes: Recipe[] = GetRecipes();
  const [showAll, setShowall] = useState(true);

  const filterRecipes = (filter: string) => {
    setRecipes(
      recipes.filter((recipe) => {
        return recipe.categories.indexOf(filter) != -1 || filter == "All";
      })
    );
  };

  const handleButtonClick = (filter: string) => {
    filterRecipes(filter);
    setShowall(false);
  };

  return (
    <>
      <h1 className="fst-italic display-1">ITHS-Grupp1 (❁´◡`❁)</h1>
      <div>
        {filters.map((filter) => (
          <button
            className="btn btn-secondary m-3"
            onClick={() => handleButtonClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="container text-center text-bg-white">
        <div className="row">
          {showAll ? (
            <MenuItemCards recipes={recipes} />
          ) : (
            <MenuItemCards recipes={filteredRecipes} />
          )}
        </div>
      </div>
    </>
  );
};
