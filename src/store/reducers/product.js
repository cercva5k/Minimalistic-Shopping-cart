import { actionTypes } from "../actions/product"
import { ADD_PRODUCT } from '../actions/types'

const initialState = {
    products: [],
    error: ''
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PRODUCT:
            return {
                ...state, error: ''
            }
        case actionTypes.FETCH_PRODUCT_ERROR:
            return {
                ...state, error: action.payload
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state, products: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload].concat(state.products)
            }
        default: return state
    }
}

export default reducer;