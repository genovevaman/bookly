import React from "react";
import "./App.css";
import { Search } from "./components/search/Search";
import { Button } from "./components/button/Button";
import { FiFilter } from "react-icons/fi";

function App() {
    return (
        <div className="App">
            <h1>Componente</h1>
            <h2>Search</h2>
            <Search onSearch={(input) => console.log("input: ", input)} />

            <h2>Button</h2>
            <Button onClick={() => console.log("click")}>Button</Button>
            <Button onClick={() => console.log("click")} isIcon><FiFilter /></Button>
        </div>
    );
}

export default App;
