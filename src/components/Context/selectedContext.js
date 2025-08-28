import { createContext, useState } from "react";

const SelectedContext = createContext();

export function SelectedProvider({ children }) {
    const [selected, setSelected] = useState([]);
    //const [MenuState, setMenu] = useState([]);

    return (
        <SelectedContext.Provider value={{ selected, setSelected}}>
            {children}
        </SelectedContext.Provider>
    );
}

export { SelectedContext };
