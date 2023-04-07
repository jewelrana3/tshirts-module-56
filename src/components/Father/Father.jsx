import React from 'react';
import Brather from '../Brather/Brather';
import Sister from '../Sister/Sister';
import MySelf from '../MySelf/MySelf';

const Father = ({ring}) => {
    console.log(ring)
    return (
        <div>
            <h2>father</h2>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Brather></Brather>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;