import React,{useContext,useRef} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from "../../../store/cart-context";


const MealItemForm = (props) => {
  const cartCntx=useContext(CartContext);
  const amountInputRef=useRef();

  const addItemToCart=(event)=>{
    event.preventDefault();
    //cartCntx.items.push(props.item);
    //const quantity=document.getElementById('amount_' + props.id).value;
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;
    
    cartCntx.addItem({...props.item,quantity:enteredAmountNumber});
    //console.log("After adding to cart",cartCntx);

  }
  return (
    <form className={classes.form} onSubmit={addItemToCart}>
      <Input
        label='Amount'
        ref={amountInputRef}
        input={{
          id:'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;