import axios from 'axios';

const path = 'https://delivery-node-js.herokuapp.com';

const getSessionId = () => {
    return localStorage.getItem('sessionID');
}

export const getShopsItems = () => {
    return axios.get(`${path}/api/shops`);
};

export const getCartItems = () => {
    const sessionId = getSessionId();
    return axios.get(`${path}/api/cart/${sessionId}`);
};


export const addToCart = (product) => {
    const sessionId = getSessionId();
    const id = product.id;
    return axios.post(`${path}/api/cart/add`, { id, sessionId, product});
};

export const removeOne = (productId) => {
    const sessionId = getSessionId();
    return axios.delete(`${path}/api/cart/delete/${productId}/${sessionId}`);
};

export const removeAll = () => {
    const sessionId = getSessionId();
    return axios.delete(`${path}/api/cart/deleteAll/${sessionId}`);
};

export const updateOne = (productId, amount) => {
    const sessionId = getSessionId();
    return axios.patch(`${path}/api/cart/update/${productId}/${sessionId}`, { amount });
};

export const makeOrder = (order) => {
    return axios.post(`${path}/api/orders/add`, { order });
}