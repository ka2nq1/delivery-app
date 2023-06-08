import React from 'react';
import Item from './Item';

const ItemsList = ({items}) => {
    return (
        <ul className='itemsList'>
            {items?.map((item) => (
                <Item key={item.id} {...{item}}/>
            ))}
        </ul>
    )
}

export default ItemsList;