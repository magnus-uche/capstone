import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { onAuthStateChangedListener, createUserDocumentFromAuth, getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.component.jsx";
import Navigation from './routes/navigation/navigation.component.jsx'
import Auth from "./routes/Authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import { setCurrentUser } from './store/user/user.action';
import { setCategoriesMap
 } from './store/category/category.action';
const App = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    
    return unsubscribe;
  }, []);

  useEffect(()=>{
    const getCategoriesMap = async () => {
        const categoriesMap = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categoriesMap))
    }
    getCategoriesMap();
},[])


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />}/>
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
 
export default App;
