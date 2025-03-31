import eve from './eve.json';
import React, { useEffect, useState, createContext } from 'react';

export const ContextData = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(eve); 
    }, []);

    return (
        <ContextData.Provider value={{ data }}>
            {children}
        </ContextData.Provider>
    );
};
