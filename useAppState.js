import { useState, useEffect, useMemo, useContext, createContext } from 'react';

const AppContext = createContext({});

const useAppState = () => {
    const initialState = {
        cartItems: [],
        showCart: false
    }

    useEffect(() => {
        console.log(localStorage);
    }, []);

    const [state, setState] = useState(initialState);

    const actions = useMemo(() => getActions(setState), [setState]);

    return { state, actions };
}

const getActions = setState => ({
    toggleCart: () => {
        setState(state => ({ ...state, showCart: !state.showCart }));
    },
    addToCart: (item) => {
        setState(state => {
            return {...state, showCart: true, cartItems: [...state.cartItems, item] }
        })
    }

});

const useAppContext = () => {
    return useContext(AppContext);
}


export { useAppState, AppContext, useAppContext };
