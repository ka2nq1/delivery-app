import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import MainAlert from './components/MainAlert';
import { AppStyles } from './styles/AppStyles';

const App = () => {

    return (
        <>
            <MainAlert/>
            <AppStyles>
                <nav>
                    <ul className='navList'>
                        <li className='button textHover'>
                            <Link to='/'>Shop</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='button textHover'>
                            <Link to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Catalog/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </AppStyles>
        </>
    );
}

export default App;
