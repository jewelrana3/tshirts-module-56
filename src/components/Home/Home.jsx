import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const shirts = useLoaderData();
    const [cart,setCart] = useState([]);

    const handleAdd = shirt =>{
        const newCart = [...cart,shirt]
        setCart(newCart)
    }

    const removeAdd=id=>{
        console.log(id)
    }
    return (
        <div className='home-container'>
            <div className='shirt-container'>
                {
                    shirts.map(shirt => <Tshirt
                        key={shirt.id}
                        shirt={shirt}
                        handleAdd={handleAdd}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                removeAdd={removeAdd}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;