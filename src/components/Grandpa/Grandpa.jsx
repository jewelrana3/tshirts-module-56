import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingGold = createContext('gold mama');
export const Money = createContext(0)
const Grandpa = () => {

    const ring = 'daimond';
    const [money,setMoney] = useState(0);

    return (
        <div className='grandpa'>
            <h3>grandpa</h3>
            <p>has Money : {money}</p>
            
            <Money.Provider value={[money,setMoney]}>
                <RingGold.Provider value='koi mama'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingGold.Provider>
            </Money.Provider>
        </div>
    );
};

export default Grandpa;