import { ChooseSides } from "./ChooseSides";
import { ChooseDrink } from "./ChooseDrink";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Orderpage = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const [showChooseSides, setShowChooseSides] = useState(true);

  console.log(recipeId);

  const handleSidesSelected = () => {
    setShowChooseSides(false);
  };

  const handleDrinksSelected = () => {
    setShowChooseSides(true);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div>
        <Link to="/store">
          <button className="m-5 ">Huvudmeny</button>
        </Link>
        {showChooseSides ? (
          <>
            <button className="m-3" onClick={handleSidesSelected}>
              Drinkar
            </button>
            <ChooseSides onSidesSelected={handleSidesSelected} />
          </>
        ) : (
          <>
            <Link to={`/chooseDrink/${recipeId}`}>
              <button className="m-3" onClick={handleDrinksSelected}>
                Tillbehör
              </button>
              <ChooseDrink />
            </Link>
          </>
        )}
      </div>
    </>
  );
};
