import { ADD_TO_CART, SHOW_CART, REMOVE_TO_CART } from '../actions/types';

export const addToCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            item: product,
        })
    }
}

export const cartItems = () => {
    return (dispatch) => {
        dispatch({
            type: SHOW_CART,
        })
    }
}

export const removeToCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_TO_CART,
            item: product
        })
    }
}