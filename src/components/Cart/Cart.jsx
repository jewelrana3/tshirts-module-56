import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeAdd }) => {
   
    let message;
    if (cart.length === 0) {
        message = <p>Pelase add a product</p>
    }
    else{
        message = <div>
            <h3>product ase</h3>
        </div>
    }


    return (
        <div>
            <h4>Order Summary :{cart.length }</h4>
           <p className= {cart.length > 2 ? 'green' : 'red'}>number</p>
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => removeAdd(tshirt._id)}>x</button>
                </p>)
            }
            {
                cart.length !== 2 ? 'tui' : 'falseeee'
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 * */ 

/**
 * CONDITIONAL CSS Class
 * 1. use ternary 
 * 2. ternary inside template string
 * */ 