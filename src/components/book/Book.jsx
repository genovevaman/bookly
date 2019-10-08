import React from "react";
import "./Book.css";

export const Book = ({ index, title, authors }) => (
    <article className="book">
        <div className="index">{index}</div>
        <h2 className="title">{title}</h2>
        <p className="authors">{authors.join(", ")}</p>
    </article>
);