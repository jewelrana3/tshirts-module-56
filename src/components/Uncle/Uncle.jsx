import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { Money, RingGold } from '../Grandpa/Grandpa';

const Uncle = () => {
    const mala = useContext(RingGold)

    const [money,setMoney] = useContext(Money)
    return (
        <div>
            <h2>Uncle</h2>
            <p>{money}</p>
            <button onClick={()=>setMoney(money+100)}>send money</button>
            
            <section className='flex'>
                <Cousin>Nila</Cousin>
                <Cousin>Mala<p>{mala}</p></Cousin>
                
            </section>
        </div>
    );
};

export default Uncle;