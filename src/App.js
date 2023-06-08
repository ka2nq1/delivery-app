import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import MainAlert from './components/MainAlert';
import Navbar from './components/Navbar';
import { getCart } from './store/actions/cartActions';
import { getShops } from './store/actions/shopsAction';
import { AppStyles } from './styles/AppStyles';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShops());
        dispatch(getCart());
    }, [dispatch])

    return (
        <>
            <MainAlert/>
            <AppStyles>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Catalog/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </AppStyles>
        </>
    );
}

export default App;
