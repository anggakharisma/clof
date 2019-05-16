import { useState, useEffect, useMemo, useContext, createContext } from 'react';

const AppContext = createContext({});

const useAppState = () => {
    let initialState = {
        cartItems: [],
        showCart: false
    }

    useEffect(() => {
        initialState.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    }, []);

    const [state, setState] = useState(initialState);

    const actions = useMemo(() => getActions(setState), [setState]);

    return { state, actions };
}

const getActions = setState => ({
    getCart: () => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    },
    toggleCart: () => {
        setState(state => ({ ...state, showCart: !state.showCart }));
    },
    addToCart: (item) => {
        setState(state => {
            localStorage.setItem('cart', JSON.stringify([...state.cartItems, item]));
            return {...state, showCart: true, cartItems: [...state.cartItems, item] }
        })
    }

});

const useAppContext = () => {
    return useContext(AppContext);
}


export { useAppState, AppContext, useAppContext };
