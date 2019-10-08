import React from "react";
import { FiFilter } from "react-icons/fi";
import "./App.css";
import { Search } from "./components/search/Search";
import { Button } from "./components/button/Button";
import { Books } from "./Books";
import { books } from "./bookdata";

export const App = () => (
    <div className="App">
        <h1>Componente</h1>
        <h2>Search</h2>
        <Search onSearch={(input) => console.log("input: ", input)} />

        <h2>Button</h2>
        <Button onClick={() => console.log("click")}>Button</Button>
        <Button onClick={() => console.log("click")} isIcon><FiFilter /></Button>
        <Books books={books} />
    </div>
);