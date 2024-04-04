import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { GetRecipes } from "../data/GetRecipes";
import { Recipe } from "../types/Recipe";

type CartItemProps = {
  id: string;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const { decreaseCartQuantity } = useShoppingCart();
  const { increaseCartQuantity } = useShoppingCart();
  const recipes: Recipe[] = GetRecipes();
  const recipe: Recipe | undefined = recipes.find(
    (recipe) => recipe._id === id
  );

  if (!recipe) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={recipe.imageUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={recipe.title}
      />
      <div className="me-auto">
        <div>
          {recipe.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x {quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {recipe.price}
        </div>
      </div>
      <div>{recipe.price * quantity}</div>
      <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
      <Button onClick={() => increaseCartQuantity(id)}>+</Button>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
