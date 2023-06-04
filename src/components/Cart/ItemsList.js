import React from 'react';
import Item from './Item';

const ItemsList = ({items}) => {
    return (
        <ul className='itemsList'>
            {items?.map((item, index) => (
                <Item key={index} {...{item}}/>
            ))}
        </ul>
    )
}

export default ItemsList;