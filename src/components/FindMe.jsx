import React from 'react';
import { Link } from 'react-router';
import ld from '../assets/icons8-linkedin-48.png'
import fb from '../assets/icons8-facebook-48.png'
import gh from '../assets/icons8-github-64.png'

const FindMe = () => {
    return (
        <div className='text-center py-10 flex flex-col gap-2'>
            <h1 className='text-4xl my-5 '>Find Me</h1>
            <div className='flex items-center justify-center gap-10'>
            <Link><img src={fb} alt="" /></Link>
            <Link><img src={ld} alt="" /></Link>
            <Link><img src={gh} alt="" /></Link>
            </div>
        </div>
    );
};

export default FindMe;