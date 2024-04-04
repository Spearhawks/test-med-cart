import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";

type RecipeProps = {
  _id: string;
  title: string;
  description: string;
  categories: string[];
  price: number;
  imageUrl: string;
};

export const MenuItemCards = ({ recipes }: { recipes: RecipeProps[] }) => {
  const { increaseCartQuantity } = useShoppingCart();

  const handleAddToCart = (recipeId: string) => {
    increaseCartQuantity(recipeId);
  };

  return (
    <>
      {recipes.map((recipe) => (
        <div className="col-lg-4 d-flex align-items-end g-5" key={recipe._id}>
          <div className="card h-100 shadow-lg">
            <div>
              <img
                src={recipe.imageUrl}
                className="card-img-top img-fluid border border-secondary border-2 rounded-2"
                style={{ aspectRatio: "1/1" }}
                alt={"Image of a plate of " + recipe.title}
              />
            </div>
            <div className="card-body">
              <div>
                <h4 className="card-title text-nowrap fw-light h5">
                  {recipe.title}
                </h4>
                <p className="card-text">{recipe.description}</p>
                <p className="card-text">
                  {recipe.categories.map((category, index) => (
                    <span key={index}>
                      <em>{category}</em>
                      {index < recipe.categories.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p>Pris: {recipe.price} :-</p>
              </div>
              <div className="text-center mt-5 mb-0">
                <NavLink to={`/orderpage/${recipe._id}`}>
                  <Button onClick={() => handleAddToCart(recipe._id)}>
                    Add to cart
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
