import Axios from '../../Axios/axios';
import { ADD_PRODUCT } from './types'

export const actionTypes = {
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
}

export const fetchProductSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductError = (errorMessage) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_ERROR,
        payload: errorMessage
    }
}

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const fetchProduct = () => {
    return (dispatch) => {
        dispatch({type: actionTypes.FETCH_PRODUCTS})
        Axios.get('products')
            .then(res => {
                dispatch(fetchProductSuccess(res))
            }).catch(err => {
                fetchProductError(err.message)
            })
    }
}