import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Footer from '../footer/footer';
import Header from '../header/header';
import Showcase from '../showcase/showcase';
import { headphones } from '../../assets/data/data';
import { fillShowcase } from '../../services/main-store';
import Cart from '../cart/cart';

export default function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fillShowcase(headphones));
    }, []);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Showcase />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </>
    )
}