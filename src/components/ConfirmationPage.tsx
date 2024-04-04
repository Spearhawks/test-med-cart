import { Link } from "react-router-dom";
import { Drink } from "../types/Drink";
import { Recipe } from "../types/Recipe";
import { useNavigate } from "react-router-dom";

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const recipeJSON = localStorage.getItem("recipe");
  const recipe: Recipe = recipeJSON ? JSON.parse(recipeJSON) : null;
  const sideJSON = localStorage.getItem("side");
  const side: string = sideJSON ? JSON.parse(sideJSON) : null;
  const drinkJSON = localStorage.getItem("drink");
  const drink: Drink = drinkJSON ? JSON.parse(drinkJSON) : null;

  const handleButtonClick = () => {
    localStorage.clear();
    alert("Tack för din beställning (❁´◡`❁)");
    navigate("/store");
  };

  return (
    <>
      <h1>Din beställning:</h1>
      <br />
      <br />
      <h3>Huvudrätt: {recipe?.title}</h3>
      <br />
      <h3>Side: {side}</h3>
      <br />
      <h3>Dryck: {drink?.strDrink}</h3>
      <br />
      <br />
      <Link to="/store">
        <button className="btn btn-primary mx-5">Huvudmeny</button>
      </Link>
      <button
        type="submit"
        className="btn btn-success"
        onClick={handleButtonClick}
      >
        Bekräfta beställning
      </button>
    </>
  );
};
