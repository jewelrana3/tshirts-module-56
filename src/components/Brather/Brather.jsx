import React, { useContext } from 'react';
import { RingGold } from '../Grandpa/Grandpa';

const Brather = () => {
    const brather = useContext(RingGold)
    return (
        <div>
            <h2>Brather</h2>
            <p>{brather}</p>
        </div>
    );
};

export default Brather;