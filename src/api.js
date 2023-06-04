import axios from 'axios';

// const path = 'http://localhost:8080';
const path = 'https://delivery-node-js.herokuapp.com';
const sessionId = window.localStorage.getItem('sessionID');

export const getShopsItems = () => {
    return axios.get(`${path}/api/shops`);
};

export const getCartItems = () => {
    return axios.get(`${path}/api/cart/${sessionId}`);
};


export const addToCart = (product) => {
    const id = product.id; 
    return axios.post(`${path}/api/cart/add`, { id, sessionId, product});
};

export const removeOne = (productId) => {
    return axios.delete(`${path}/api/cart/delete/${productId}/${sessionId}`);
};

export const removeAll = () => {
    return axios.delete(`${path}/api/cart/deleteAll/${sessionId}`);
};

export const updateOne = (productId, amount) => {
    return axios.patch(`${path}/api/cart/update/${productId}/${sessionId}`, { amount });
};

export const makeOrder = (order) => {
    return axios.post(`${path}/api/orders/add`, { order });
}