import { addToCart, getCartItems, removeAll, removeOne, updateOne } from "../../api";
import { SET_CART, SET_IS_CART_LOADING } from "../../constants/CartConstants";
import { success } from "./alertActions";

export const getCart = () => (
    dispatch => {
        dispatch(setIsLoading(true));
        getCartItems()
            .then(response => {
                dispatch(setCart(response.data));
                dispatch(setIsLoading(false));
                return response;
            })
    }
);

export const removeCartItem = (itemId) => (
    dispatch => {
        dispatch(setIsLoading(true));
        removeOne(itemId)
            .then(response => {
                dispatch(setCart(response.data));
                dispatch(setIsLoading(false));
                return response;
            }
            )
    }
);

export const clearCart = () => (
    dispatch => {
        dispatch(setIsLoading(true));
        removeAll()
            .then(response => {
                dispatch(setCart([]));
                dispatch(setIsLoading(false));
                return response;
            }
            )
    }
);

export const addCartItem = (product) => (
    dispatch => {
        dispatch(setIsLoading(true));
        addToCart(product)
            .then(response => {
                dispatch(setCart(response.data));
                dispatch(setIsLoading(false));
                dispatch(success(`${product.name} was added!`))
                return response;
            })
    }
);

export const updateCartItem = (itemId, amount) => (
    dispatch => {
        dispatch(setIsLoading(true));
        updateOne(itemId, amount)
            .then(response => {
                dispatch(setCart(response.data));
                dispatch(setIsLoading(false))
                return response;
            }
            )
    }
);

const setCart = (payload) => ({ type: SET_CART, payload });
const setIsLoading = (payload) => ({ type: SET_IS_CART_LOADING, payload });