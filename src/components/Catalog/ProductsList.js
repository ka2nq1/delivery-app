import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { success } from '../../store/actions/alertActions';
import { addCartItem, updateCartItem } from '../../store/actions/cartActions';
import { Preloader } from '../../styles/Preloader';

const ProductsList = ({products, isShopsLoading}) => {
    const {items, isLoading} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        const cartItem = items.find(e => e.id === product.id);
        if (cartItem) {
            dispatch(updateCartItem(cartItem.id, cartItem.product.amount + 1));
            dispatch(success(`Amount of ${cartItem.product.name} in cart changed from ${cartItem.product.amount} to ${cartItem.product.amount + 1}`))
        } else {
            dispatch(addCartItem(product));
        }
    }

    return (
        <ul className='productsList'>
            {isShopsLoading ? 
                <Preloader width='calc(50% - 5px)' height='400px'/>  
            :
                <>
                    {products?.map((product, index) => (
                        <li key={index} className='productItem'>
                            <img src={product.image} alt={product.name}/>
                            <div>
                                <h3>{product.name}</h3>
                                <p>{product.price.toFixed(2)} UAH</p>
                                <button disabled={isLoading} onClick={e => addToCartHandler(product)}>Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </>
            }
        </ul>
    )
}

export default ProductsList;