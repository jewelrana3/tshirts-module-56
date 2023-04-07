import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const shirts = useLoaderData();

    const handleAdd = shirt =>{
        console.log(shirt)
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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;