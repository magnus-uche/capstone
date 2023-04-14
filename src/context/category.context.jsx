import React, { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
export const CategoryContext = createContext({
    categoriesMap: {},
});

const CategoryProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoriesMap)
        }
        getCategoriesMap();
    },[])
    
    const value = {categoriesMap}
    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;