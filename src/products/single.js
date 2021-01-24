import React, {useEffect, useState} from 'react';
import {useParams, useHistory, NavLink} from 'react-router-dom';
import { addToCart } from '../store/actions/cartProduct';
import { connect } from "react-redux";
import Axios from '../Axios/axios';

const SingleProduct = (props) => {

    const [single, setSingle] = useState({})

    const params = useParams()

    const history = useHistory()

    useEffect(() => {
        Axios.get('/products/' + parseInt(params.id))
        .then(res => {
            setSingle(res)
        }).catch(err => {
            console.error(err)
        })
    }, [params.id, history])

    return(
        <div className="p-5">
            <div className="row">
                <div className="col-12">
                    <NavLink to='/'>
                        <div className="btn btn-light mb-5">{"<"} Go Back</div>
                    </NavLink>
                </div>
                <div className="col-12 col-lg-5">
                    <img src={single.image} alt={single.title} className="w-100 h-100"/>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="d-flex flex-column">
                        <h1 className="fas-5">{single.title}</h1>
                        <span className="my-3"><b>Category: </b>{single.category}</span>
                        <b>Price: ${single.price}</b>
                        <p className="my-3">{single.description}</p>
                        <div className="btn btn-danger" onClick={() => props.addToCart(single)}>Add To Cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { addToCart }) (SingleProduct);