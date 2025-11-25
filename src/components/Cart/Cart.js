import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from "../../store/cart-context";
import styles from "./CartItem.module.css";
import CartProvider from '../../store/CartProvider';


const Cart = (props) => {
  const cartCntx=useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntx.items.map((item)=>(
        <li className={styles[`cart-item`]} key={item.id}>
          <div className={styles.summary}>
          <span className={styles.price}>Name:{item.name }</span>&nbsp;
          <span className={styles.price}>Price:{item.price}</span>&nbsp;
          <span className={styles.price}>Quantity:{item.quantity}</span>
          </div>
          <div className={styles.action}>
            <button onClick={()=>cartCntx.decreaseQuantity(item.id)}>-</button>
            {console.log(item.id)}
            <button onClick={()=>cartCntx.increaseQuantity(item.id)}>+</button>

          </div>
          </li>
          
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