import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const {items, isLoading} = useSelector(store => store.cart);
    const {pathname} = useLocation();
    const [itemsCount, setItemCount] = useState(0);

    useEffect(() => {
        setItemCount(items.reduce((acc, item) => acc + Number(item.product?.amount), 0))
    }, [items])

    return (
        <nav>
            <a href='/'>
                <img width='50' src={`${process.env.PUBLIC_URL}/deliveryLogo.png`} alt='logo' />
            </a>
            <ul className='navList'>
                <li className={`button textHover ${pathname === '/' ? 'active' : ''}`}>
                    <Link to='/'>Shop</Link>
                </li>
                <li className='divider'></li>
                <li className={`button textHover ${pathname === '/cart' ? 'active' : ''}`}>
                    <Link to='/cart'>Cart</Link>
                    {!!itemsCount &&
                        <div className='basketCount'>{itemsCount}</div>
                    }
                </li>   
            </ul>
        </nav>
    )
}

export default Navbar;