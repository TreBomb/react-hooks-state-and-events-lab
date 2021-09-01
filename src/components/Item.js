import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("");

  function inCart() {
    const ret = cart==="in-cart" ? setCart("") : setCart("in-cart");
    return ret;
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => inCart()}>Add to Cart</button>
    </li>
  );
}

export default Item;
