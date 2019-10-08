import React from "react";
import { Book } from "./components/book/Book";

export const Books = ({ books }) => (
    <div>
        {books.map((book, index) => (
            <Book
                key={index}
                index={index + 1}
                title={book.title}
                authors={book.authors}
            />
        ))}
    </div>
);

