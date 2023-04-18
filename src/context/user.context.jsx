import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer.utils";
import { onAuthStateChangedListener, createUserDocumentFromAuth  } from "../utils/firebase/firebase.utils";

 export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
  "SET_CURRENT_USER":"SET_CURRENT_USER"
}

const reducer = (state, action) => {
  const { type, payload} = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
      default: 
      throw new Error (`unhandled type ${type} in useReducer`);
  }
}

const initial_state = {
  currentUser: null,
}

const UsersProvider = ({ children }) => {
  const [{currentUser}, dispatch] = useReducer(reducer, initial_state);
  const setCurrentUser = (user) => {
    dispatch(
      createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }
  
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UsersProvider;
