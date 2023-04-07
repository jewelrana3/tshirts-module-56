import React from 'react';
import './Tshirt.css'

const Tshirt = ({shirt,handleAdd}) => {
    const {picture,name,gender,price} = shirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h5>Price:${price}</h5>
            <button onClick={handleAdd}>Buy Now</button>
        </div>
    );
};

export default Tshirt;