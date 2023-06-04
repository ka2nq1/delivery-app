import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { warning } from '../../store/actions/alertActions';
import { addCartItem } from '../../store/actions/cartActions';
import { Preloader } from '../../styles/Preloader';

const ProductsList = ({products, isShopsLoading}) => {
    const {items} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        const isAlreadyAdded = !!items.find(e => e.id === product.id);
        if (isAlreadyAdded) {
            dispatch(warning('Already added!'))
        } else {
            dispatch(addCartItem(product))
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
                                <button onClick={e => addToCartHandler(product)}>Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </>
            }
        </ul>
    )
}

export default ProductsList;