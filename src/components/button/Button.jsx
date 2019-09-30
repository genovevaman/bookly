import React from "react";
import classNames from "classnames";
import "./Button.css";

export const Button = ({
    children,
    onClick,
    isIcon = false,
    ...rest
}) => {
    const handleClick = (event) => {
        event.preventDefault();
        onClick();
    }

    return (
        <button onClick={handleClick}
            className={classNames("button", { "button-icon": isIcon })} 
            {...rest}
        >
            {children}
        </button>
    );
}

