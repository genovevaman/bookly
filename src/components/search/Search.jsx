import React, { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/UseDebounce";
import "./Search.css";
import { FiSearch } from 'react-icons/fi';

export const Search = ({
    onSearch
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        onSearch(debouncedSearchTerm);
    }, [debouncedSearchTerm, onSearch]);

    const onChange = (event) => {
        const input = event.target;
        const value = input.value;
        // onSearch(input.value);
        setSearchTerm(value);
    }

    return (
        <div className="search">
            <div className="search-bar">
                <input type="text" onChange={onChange} />
            </div>
            <div className="search-icon"><FiSearch size={36} /></div>
        </div>
    );
}

