import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [theme, setTheme] = useState("App light");

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function appClass() {
    const ret = theme==="App dark" ? setTheme("App light") : setTheme("App dark");
    return ret;
  }

  return (
    <div className={theme}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => appClass()}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
