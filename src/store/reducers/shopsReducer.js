import { SET_SHOPS, SET_IS_LOADING } from "../../constants/ShopsConstants";


const initialState = {
    items: [],
    isLoading: false
};

export default function shopsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SHOPS:
            return { ...state, items: action.payload };
        case SET_IS_LOADING:
			return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};