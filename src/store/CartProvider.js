import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  // ⬆ Add item — NO MERGING — ALWAYS push a new one
  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // ➕ Increase quantity of an item inside the cart
  const increaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease quantity of an item inside the cart
  const decreaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const context = {
    items,
    addItem: addItemHandler,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
