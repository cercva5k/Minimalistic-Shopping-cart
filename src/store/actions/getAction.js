import { GET_NUMBERS_CART } from './types';

export const getNumbers = () => {
    return (dispatch) => {
        dispatch({
            type: GET_NUMBERS_CART
        })
    }
}