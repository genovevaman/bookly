import React from "react";
import { FiPlus } from "react-icons/fi";
import "./App.css";
import { Search } from "./components/search/Search";
import { Button } from "./components/button/Button";
import { Books } from "./Books";
import { books } from "./bookdata";

export const App = () => (
    <div className="App">
        <header>
            <h1>Bookly</h1>
            <Search onSearch={(input) => console.log("input: ", input)} />
            <Button onClick={() => console.log("click")}>Agauga o carte</Button>
        </header>

        <Books books={books} />
    </div>
);