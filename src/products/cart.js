import React, {useEffect} from 'react';
import Card from './card';
import {useDispatch, useSelector} from 'react-redux';
import {cartItems} from '../store/actions/cartProduct';
import Empty from './noItems';

const Cart = (props) => {

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    let productContents = '';

    useEffect(() => {
        if(cart.products.length === 0) {
            dispatch(cartItems())
        }
    }, [dispatch, cart.products])

    if(cart.products.length > 0) {
        productContents = cart.products.map((product, i) => <Card key={i} id={product.id} title={product.title} price={product.price} image={product.image} category={product.category} description={product.description} count={product.count} cart/>)

    } else {
        productContents = <Empty/>
    }

    return(
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-end">Total: <b className="ml-2">${parseInt(cart.totalCost)}</b></div>
            {productContents}
        </div>
    )
}

export default Cart;
