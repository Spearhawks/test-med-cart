import { GetDrinkById } from "../data/GetDrinkById";
import { Drinkmatcher } from "../data/Drinkmatcher";
import { Recipe } from "../types/Recipe";
import { Drink } from "../types/Drink";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetRecipes } from "../data/GetRecipes";

export const ChooseDrink = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const recipes: Recipe[] = GetRecipes();
  const recipe = recipes.find((recipe) => recipe._id === recipeId) as Recipe; // Hitta receptet med matchande ID

  const recommendedDrink: Drink = GetDrinkById(Drinkmatcher(recipe)) as Drink;
  const drinkList: Drink[] = [
    GetDrinkById(12790) as Drink,
    GetDrinkById(11113) as Drink,
    GetDrinkById(11242) as Drink,
    GetDrinkById(12418) as Drink,
    GetDrinkById(14482) as Drink,
    GetDrinkById(11007) as Drink,
    GetDrinkById(17074) as Drink,
    GetDrinkById(17221) as Drink,
    GetDrinkById(12654) as Drink,
    GetDrinkById(12698) as Drink,
    GetDrinkById(12736) as Drink,
  ];
  const [selectedDrink, setSelectedDrink] = useState<Drink>(recommendedDrink);
  const saveToLocalStorage = (drink: Drink) => {
    localStorage.setItem("drink", JSON.stringify(drink));
  };

  const handleDrinkChange = (drink: Drink) => {
    setSelectedDrink(drink);
  };

  const handleButtonClick = () => {
    saveToLocalStorage(selectedDrink as Drink);
  };

  return (
    <div className="container text-start py-5">
      <h3 className="display-6 text-center mb-4">Välj dryck:</h3>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div className="col">
          <div
            className={`card h-100 border-success rounded-0 p-0 ${
              selectedDrink === recommendedDrink
                ? "bg-secondary text-white"
                : ""
            }`}
            onClick={() => handleDrinkChange(recommendedDrink)}
          >
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={recommendedDrink?.strDrinkThumb}
                  className="img-fluid"
                  alt={recommendedDrink?.strDrink}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body p-2">
                  <h5 className="card-title mb-0">
                    {recommendedDrink?.strDrink}
                  </h5>
                  <small className="card-text d-block">
                    <span>{recommendedDrink?.strAlcoholic}</span>
                  </small>
                  <small>
                    <div className="badge bg-success">
                      Rekommenderas till {recipe.title}
                    </div>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {drinkList.map((drink) => (
          <div className="col" key={drink?.idDrink}>
            <div
              className={`card h-100 p-0 rounded-0 ${
                selectedDrink === drink ? "bg-secondary text-white" : ""
              }`}
              onClick={() => handleDrinkChange(drink)}
            >
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={drink?.strDrinkThumb}
                    className="img-fluid"
                    alt={drink?.strDrink}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body p-2">
                    <h5 className="card-title mb-0">{drink?.strDrink}</h5>
                    <small className="card-text">
                      <span>{drink?.strAlcoholic}</span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/confirmationpage">
          <button
            onClick={handleButtonClick}
            type="submit"
            className="btn btn-success mt-3"
            disabled={!selectedDrink}
          >
            Välj
          </button>
        </Link>
      </div>
    </div>
  );
};
