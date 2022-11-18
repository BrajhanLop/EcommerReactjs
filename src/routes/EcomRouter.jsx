import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavbarEco from '../components/NavbarEco';
import Home from '../pages/Home';
import NoFound from '../pages/NoFound';
import ProductDetail from '../pages/ProductDetail';

const EcomRouter = () => {
    return (
        <>
            <NavbarEco />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/product' element={ <ProductDetail /> }/>
                <Route path='*' element={ <NoFound/> }/>
            </Routes>

        </>
    );
};

export default EcomRouter;