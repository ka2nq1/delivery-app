import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../store/actions/cartActions';

const Item = ({item}) => {
    const {isLoading} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(item.product.amount);

    const removeItemHandler = (itemId) => {
        dispatch(removeCartItem(itemId))
    };

    const onBlurHandler = (id, amount) => {
        dispatch(updateCartItem(id, amount));
    }

    return (
        <li>
            <img width='150' src={item.product.image} alt={item.product.name}/>
            <div className='priceWrap'>
                <p>{item.product.name}</p>
                <p>Price: {item.product.price * amount}.00 UAH</p>
            </div>
            <div>
                <input 
                    id='amount' 
                    type="number" 
                    min={1} 
                    max={9}
                    value={amount} 
                    onChange={e => setAmount(+e.target.value)}
                    onBlur={e => onBlurHandler(item.id, amount)}
                />
                <button disabled={isLoading} onClick={e => removeItemHandler(item.id)}>Remove</button>
            </div>
        </li>
    )
}

export default Item;