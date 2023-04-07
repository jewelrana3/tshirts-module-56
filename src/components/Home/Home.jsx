import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const shirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAdd = shirt => {
        // console.log(shirt)
        const exits = cart.find(ts => ts._id === shirt._id)
        console.log({exits,shirt,cart})
        if (exits) {
            toast('already add ')
        }
        else {
            const newCart = [...cart, shirt]
            setCart(newCart)


        }

    }

    const removeAdd = id => {
        console.log(id)
        const remaing = cart.filter(ts => ts._id !== id);
        console.log({cart,remaing})
        setCart(remaing)
    }
    return (
        <div className='home-container'>
            <div className='shirt-container'>
                {
                    shirts.map(shirt => <Tshirt
                        key={shirt._id}
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