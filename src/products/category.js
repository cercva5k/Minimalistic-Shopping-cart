import React, {useEffect} from 'react';
import Card from './card';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchProduct} from '../store/actions/product';
import Loader from '../layouts/loader';

const Product = (props) => {

    const product = useSelector(state => state.products.products)

    const dispatch = useDispatch()

    const params = useParams()

    let productContents = <Loader />;

    useEffect(() => {
        if(product.length === 0) {
            dispatch(fetchProduct())
        }
    }, [dispatch, product])
    
    if(product.length > 0) {
        const filterCategory = product.filter((categoryProduct, i) => categoryProduct.category === params.category)
        productContents = filterCategory.map((product, i) => <Card key={i} id={product.id} title={product.title} price={product.price} image={product.image} category={product.category} description={product.description}/>)
    }

    return(
        <div className="row">
            {productContents}
        </div>
    )
}

export default Product;