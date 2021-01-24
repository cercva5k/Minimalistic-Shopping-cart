import { useState, useEffect } from 'react';
import axios from '../Axios/axios'
import { connect } from "react-redux";
import { addProduct } from '../store/actions/product';

const AddProduct = (props) => {

    const [payload, setPayload] = useState({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: ''
    })

    const [category, setCategory] = useState([])

    const handleChange = event => {
        setPayload({
            ...payload,
            [event.target.name]: event.target.value
        })
    }
    
    useEffect(() => {
        axios.get('/products/categories')
        .then(data => {
            setCategory(data)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    const categories = []

    category.forEach(element => {
        categories.push({
            name: element
        })
    })

    const option = categories.map((item, index) => <option key={index} value={item.name} selected={payload.category === item.name ? 'selected' : ''} >{item.name}</option>)

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('products', {
            ...payload
        }).then(res => {
            props.addProduct(res)
            setPayload({})
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <div className="col-12 col-lg-10 mx-auto my-5">
            <h4>Add Product</h4>
            <hr/>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-12 col-md-6 my-2">
                    <label className="form-label">Product Title</label>
                    <input type="text" name="title" className="form-control" placeholder="Product Title" value={payload.title || ''} onChange={handleChange}/>
                </div>
                <div className="col-12 col-md-6 my-2">
                    <label className="form-label">Product Price</label>
                    <input type="number" name="price" className="form-control" placeholder="Product Price" value={payload.price || ''} onChange={handleChange}/>
                </div>
                <div className="col-12 col-md-6 my-2">
                    <label className="form-label">Product Category</label>
                    <select className="form-control" name="category" onChange={handleChange}>
                        <option value="">Choose Category</option>
                        {option} 
                    </select>
                </div>
                <div className="col-12 col-md-6 my-2">
                    <label className="form-label">Product Image Link</label>
                    <input type="link" className="form-control" name="image" placeholder="Product Image" value={payload.image || ''} onChange={handleChange}/>
                </div>
                <div className="col-12 my-2">
                    <label className="form-label">Product Description</label>
                    <textarea className="form-control" name="description" type="message" placeholder="Description" rows="6" value={payload.description || ''} onChange={handleChange}></textarea>
                </div>
                <div className="col-12 d-flex justify-content-center mt-4">
                    <button className="btn btn-success">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, { addProduct }) (AddProduct);