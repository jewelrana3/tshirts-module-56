import React, { useContext } from 'react';
import { Money } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(Money)
    return (
        <div>
            <h2>Sister</h2>
            <p>{money}</p>
        </div>
    );
};

export default Sister;