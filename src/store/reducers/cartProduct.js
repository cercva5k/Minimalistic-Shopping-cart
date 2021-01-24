import { ADD_TO_CART, GET_NUMBERS_CART, SHOW_CART, REMOVE_TO_CART } from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    total: 0,
    totalCost: 0,
    products: [],
    notification: ''
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const itemIndex = state.products.findIndex((item) => item.id === action.item.id)
            if(itemIndex > -1) {
                return update(state, {
                    total: {$set: state.total + 1},
                    products: {
                        [itemIndex]: {
                            count: {$set: state.products[itemIndex].count + 1}
                        }
                    },
                    notification: {$set: 'Success'},
                    totalCost: {$set: state.totalCost + action.item.price},
                })
            } else {
                return {
                    ...state,
                    total: state.total + 1,
                    products: state.products.concat({...action.item, count: 1}),
                    notification: 'Success',
                    totalCost: action.item ? state.totalCost + action.item.price : 0
                }
            }
        case GET_NUMBERS_CART:
            return {
                ...state
            }
        case SHOW_CART:
            return {
                ...state
            }
        case REMOVE_TO_CART:
            const index = state.products.findIndex(item => item.id === action.item.id);
            if(state.products[index].count > 1) {
                return update(state, {
                    total: {$set: state.total - 1},
                    products: {
                        [index]: {
                            count: {$set: state.products[index].count - 1}
                        }
                    },
                    notification: {$set: 'Success'},
                    totalCost: {$set: state.totalCost - action.item.price}
                })
            } else {
                return {
                    ...state,
                    total: state.total - 1,
                    products: state.products.filter((_, i) => i !== index),
                    notification: 'Success',
                    totalCost: state.totalCost - action.item.price
                }
            }

        default: return state
    }
}

export default cartReducer;