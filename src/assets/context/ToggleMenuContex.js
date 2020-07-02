import React, { useState, createContext } from "react";

export const ToggleMenuContex = createContext();

export const ToggleMenuProvider = (props) => {
    const [ToggleMenu, setToggleMenu] = useState(false);

    return (
        <ToggleMenuContex.Provider value={{ toggle: [ToggleMenu, setToggleMenu] }}>
            {props.children}
        </ToggleMenuContex.Provider>
    )
}