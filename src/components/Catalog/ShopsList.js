import React from 'react';
import { useDispatch } from 'react-redux';
import { warning } from '../../store/actions/alertActions';
import { Preloader } from '../../styles/Preloader';

const ShopsList = ({shops, isLoading, cartItems, selectedShop, setSelected}) => {
    const dispatch = useDispatch();

    const selectShopHandler = (shopName) => {
        if (cartItems.length && selectedShop !== shopName) {
            dispatch(warning('You can choose products from only one store. Empty the shopping cart if you want to choose another store.'))
        } else {
            setSelected(shopName);
        }
    };

    return (
        <ul>
            {isLoading ? 
                <Preloader height='42px'/>
            :
                <>
                    {shops?.map((shop, index) => (
                        <li 
                            className={`button shopItem ${selectedShop === shop.name ? 'shopActiveItem' : ''}`}
                            key={index} 
                            onClick={e => selectShopHandler(shop.name)}
                        >
                            <p>{shop.name}</p>
                        </li>
                    ))}
                </>
            }
        </ul>
    )
}

export default ShopsList;