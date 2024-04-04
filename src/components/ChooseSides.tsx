import { Link, useNavigate, useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button } from "react-bootstrap";
import { GetRecipesByCategory } from "../data/GetRecipesByCategory";

interface ChooseSidesProps {
  onSidesSelected: () => void;
}

export const ChooseSides = ({ onSidesSelected }: ChooseSidesProps) => {
  const { decreaseCartQuantity, increaseCartQuantity } = useShoppingCart();
  const recipes = GetRecipesByCategory("Sides");
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onSidesSelected();
    navigate(`/chooseDrink/${recipeId}`);
  };

  return (
    <>
      {" "}
      <h3>Välj sides:</h3>
      <br />
      <br />
      {recipes.map((side) => (
        <div className="form-check" key={side._id}>
          <Button onClick={() => decreaseCartQuantity(side._id)}>-</Button>
          <label className="form-check-label" htmlFor={side._id}>
            <h4>{side.title}</h4>
          </label>
          <Button onClick={() => increaseCartQuantity(side._id)}>+</Button>
        </div>
      ))}
      <br />
      <br />
      <Link to={`/orderpage/${recipeId}`}>
        <button
          onClick={handleButtonClick}
          type="submit"
          className="btn btn-success"
        >
          Next
        </button>
      </Link>
    </>
  );
};
