import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../products/index';
import SingleProduct from '../products/single';
import SingleCategory from '../products/category';
import Cart from '../products/cart';
import AddProduct from '../products/addProduct';

const Routes = ({counter}) => {
    return (
        <Switch>
            <Route path='/products/:id' component={SingleProduct} />
            <Route path='/categories/:category' component={SingleCategory} />
            <Route path='/cart' component={Cart}/>
            <Route path='/add-product' component={AddProduct}/>
            <Route path='/' component={Home} />
        </Switch>
    )
}

export default Routes;