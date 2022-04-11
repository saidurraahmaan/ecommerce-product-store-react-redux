import {ActionTypes} from "../constants/action-types";

const initialState = {
    product: []
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,product: payload};
        default:
            return state;
    }
}