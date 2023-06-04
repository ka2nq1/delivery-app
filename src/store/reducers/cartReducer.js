import { SET_CART, SET_IS_CART_LOADING } from "../../constants/CartConstants";


const initialState = {
    items: [],
    isLoading: false
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            return { ...state, items: action.payload };
        case SET_IS_CART_LOADING:
			return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};