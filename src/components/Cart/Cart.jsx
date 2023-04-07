import React from 'react';

const Cart = ({ cart, removeAdd }) => {
   
    let message;
    if (cart.length === 0) {
        message = <p>Pelase add a product</p>
    }


    return (
        <div>
            <h4>Order Summary :{cart.length}</h4>
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => removeAdd(tshirt._id)}>x</button>
                </p>)
            }
        </div>
    );
};

export default Cart;