import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartCntx from "../../store/cart-context";


const Cart = (props) => {
  const cartCntx=useContext(CartCntx);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntx.items.map((item)=>(
        <li key={item.id}>Name:{item.name} Price:{item.price} Quantity:{item.quantity}</li>
      ))}
    </ul>
  );
  const totalAmount=cartCntx.items.reduce((acc,item)=>{
    return acc+(item.price*item.quantity);
  },0);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;