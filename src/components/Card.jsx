import React from 'react';
import educatioinLogo from '../assets/education-removebg-preview.png'
import { FaCode } from 'react-icons/fa';


const Card = (d) => {
    console.log(d.data.image)
    return (
        <div>
            <h1> {d.data.image} {d.data.title}</h1>
        </div>
    );
};

export default Card;