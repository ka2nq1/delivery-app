import { getShopsItems } from "../../api";
import { SET_IS_LOADING, SET_SHOPS } from "../../constants/ShopsConstants";

export const getShops = () => (
    dispatch => {
        dispatch(setIsLoading(true));
        getShopsItems()
            .then(response => {
                dispatch(setShops(response.data.shops));
                if (!localStorage.getItem('sessionID')) {
                    localStorage.setItem('sessionID', response.data.sessionId);
                }
                dispatch(setIsLoading(false));
                return response;
        })
    }
);

const setShops = (payload) => ({ type: SET_SHOPS, payload });
const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload});