import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CatalogStyles } from '../../styles/CatalogStyles';
import ProductsList from './ProductsList';
import ShopsList from './ShopsList';

const Catalog = () => {
    const {items, isLoading} = useSelector(state => state.shops);
    const {cart} = useSelector(state => state);
    const cartItems = cart.items;
    const [selected, setSelected] = useState("McDonald's");
    const selectedShop = !!cartItems.length ? cartItems[0].product.shop : selected;

    const products = items.filter(e => e.name === selectedShop).flatMap(e => e.products);

    return (
        <CatalogStyles>
            <h1>Catalog Page</h1>
            <ShopsList shops={items} {...{cartItems, isLoading, selectedShop, setSelected}}/>
            <ProductsList isShopsLoading={isLoading} {...{products}}/>
        </CatalogStyles>
    )
}

export default Catalog;