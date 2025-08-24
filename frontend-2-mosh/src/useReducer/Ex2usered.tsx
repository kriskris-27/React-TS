import React, { useReducer } from "react";

// Reducer function: handles all cart actions in one place
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.product]; // add new product
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id); // remove by id
    case "CLEAR_CART":
      return []; // empty cart
    default:
      return state;
  }
}

export default function Shop() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Headphones", price: 199 },
    { id: 3, name: "Keyboard", price: 49 },
  ];

  return (
    <div>
      <h2>🛒 Cart ({cart.length} items)</h2>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>

      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id} style={{ margin: "10px" }}>
          {p.name} - ${p.price}
          <button onClick={() => dispatch({ type: "ADD_ITEM", product: p })}>
            Add
          </button>
          <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: p.id })}>
            Remove
          </button>
        </div>
      ))}

      <h3>Cart Items:</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name} (${item.price})</li>
        ))}
      </ul>
    </div>
  );
}
