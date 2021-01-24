import { NavLink } from "react-router-dom";
import React, {useEffect, useState, Fragment} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../store/actions/getAction';
import Notification from './notification';

const Navbar = (props) => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)

    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }, [props, props.notification])

  useEffect(() => {
    getNumbers()
  }, [])

  return (
    <Fragment>
      {visible ? <Notification notification={props.notification}/> : ''}
      <div className="bg-dark p-3 navbar-sticky">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <NavLink to="/">
              <b className="text-white">Market</b>
            </NavLink>
              <div className="navbar-menu">
                  <ul className="list-unstyled d-flex mb-0">
                      <li className="mx-2">
                          <NavLink to={"/categories/electronics"} className="text-white">Electronics</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to={"/categories/jewelery"} className="text-white">Jewelery</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to={"/categories/men clothing"} className="text-white">Men Clothing</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to={"/categories/women clothing"} className="text-white">Women Clothing</NavLink>
                      </li>
                  </ul>
              </div>
              <NavLink to={"/cart"}>
                <div className="d-flex text-white">
                  <span className="mr-2">Cart:</span>
                  <b>{props.cartProps}</b>
                </div>
              </NavLink>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <NavLink to={"/add-product"} className="btn btn-success text-white ml-auto d-flex fit-content">
          Add Product
        </NavLink>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartProps: state.cart.total,
    notification: state.cart.notification
  }
}

export default connect(mapStateToProps, { getNumbers } )(Navbar);
