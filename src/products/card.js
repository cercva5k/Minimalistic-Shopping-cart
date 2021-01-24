import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, removeToCart } from '../store/actions/cartProduct';

const Productcard = (props) => {

  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <div className="shadow rounded p-3 h-100 position-relative">
        {
          props.count ? <div className="cart-count">{props.count}</div> : ''
        }
        <img src={props.image} alt={props.title} className="img" />
        <div className="title my-3">{props.title}</div>
        <div className="d-flex align-items-center justify-content-between">
          <span>
            <NavLink to={"/categories/" + props.category}>
              {props.category}
            </NavLink>
          </span>
          <span>
            <b>${props.price}</b>
          </span>
        </div>
        <div className="mt-2">
          <p className="description">{props.description}</p>
        </div>

        <div className="d-flex justify-content-between w-100">
          {
            !props.cart ? <div className="btn btn-success" onClick={() => props.addToCart(props)}>Add To Cart</div> : <div className="btn btn-danger" onClick={() => props.removeToCart(props)}>Remove to cart</div>
          }
          <NavLink to={"/products/" + props.id}>
            <div className="btn btn-info">View Product</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addToCart, removeToCart }) (Productcard);
