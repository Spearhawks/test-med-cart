import {
  Homepage,
  Storepage,
  Orderpage,
  ChooseDrink,
  ConfirmationPage,
} from "../src/components/index.ts";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";
import { Navbar } from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/orderpage/:recipeId",
    element: <Orderpage />,
  },
  {
    path: "/store",
    element: <Storepage />,
  },
  {
    path: "/choosedrink/:recipeId",
    element: <ChooseDrink />,
  },
  {
    path: "/confirmationpage",
    element: <ConfirmationPage />,
  },
]);

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
