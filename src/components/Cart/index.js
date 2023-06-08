import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeOrder } from '../../api';
import { clearCart } from '../../store/actions/cartActions';
import { error, success, warning } from '../../store/actions/alertActions';
import { CartStyles } from '../../styles/CartStyles';
import ContactsForm from './ContactsForm';
import ItemsList from './ItemsList';

const Cart = () => {
    const {items, isLoading} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalSum = items?.reduce((acc, current) => acc + (current.product.price * current.product.amount),0);

    const [order, setOrder] = useState({
        id: localStorage.getItem('sessionID'),
        products: [],
        name: '',
        email: '',
        phone: '',
        address: '',
        totalSum: 0
    });

    const isOrderReady = order.name && order.email && order.phone && order.address;

    const orderHandler = () => {
        const products = items.flatMap(item => item.product);
        if (isOrderReady) {
            makeOrder({...order, products, totalSum})
                .then(response => clearCartHandler())
                .catch(err => dispatch(error(err.message)))
                .finally(() => dispatch(success('Order successfully created. A manager will contact you soon.')));
        } else {
            dispatch(warning('Fill in all fields!'))
        }
    };

    const clearCartHandler = () => (
        dispatch(clearCart())
    );

    return (
        <CartStyles>
            {!!items.length ?
                <>
                    <h1>Cart Page</h1>
                    <div className='topWrap'>
                        <ContactsForm {...{items, order, setOrder}}/>
                        <ItemsList {...{items}}/>
                    </div>    
                    <div className='resultWrap'>
                        <button disabled={isLoading} onClick={clearCartHandler}>Clear the basket</button>
                        <div>
                            <h3>Order sum: {totalSum.toFixed(2)} UAH</h3>
                            <button 
                                disabled={isLoading} 
                                onClick={e => orderHandler()}
                                className='mainButton'
                            >
                                Make an order
                            </button>
                        </div>
                    </div>
                </>
                :
                <h3>Cart is empty!</h3>
            }
        </CartStyles>
    )
}

export default Cart;