import { getShopsItems } from "../../api";
import { SET_IS_SHOP_LOADING, SET_SHOPS } from "../../constants/ShopsConstants";

export const getShops = () => (
    dispatch => {
        dispatch(setIsShopLoading(true));
        getShopsItems()
            .then(response => {
                dispatch(setShops(response.data.shops));
                dispatch(setIsShopLoading(false));
                return response;
        })
    }
);

const setShops = (payload) => ({ type: SET_SHOPS, payload });
const setIsShopLoading = (payload) => ({type: SET_IS_SHOP_LOADING, payload});