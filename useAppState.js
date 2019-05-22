import { useState, useEffect, useMemo, useContext, createContext } from "react";

const AppContext = createContext({});

const useAppState = () => {
  let initialState = {
    cartItems: [],
    showCart: false
  };

  useEffect(() => {
    initialState.cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  }, []);

  const [state, setState] = useState(initialState);

  const actions = useMemo(() => getActions(setState), [setState]);

  return { state, actions };
};

const getActions = setState => ({
  getCart: () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  },
  toggleCart: () => {
    setState(state => ({ ...state, showCart: !state.showCart }));
  },
  addToCart: item => {
    setState(state => {
      let cartItemFound = state.cartItems.find(
        cartItem => item._id === cartItem._id
      );
      if (!cartItemFound) {
        let newCart = [...state.cartItems, { ...item, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { ...state, showCart: true, cartItems: newCart };
      }
      let newCart = state.cartItems.map(cartItem => {
        return cartItem._id === item._id
          ? { ...cartItem, qty: ++cartItem.qty }
          : cartItem;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, showCart: true, cartItems: newCart };
    });
  }
});

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppState, AppContext, useAppContext };
