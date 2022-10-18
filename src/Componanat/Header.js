import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='bg-sky-300 h-20'>
            <div className='sm:text-5xl text-right pr-9' >
                <Link className=' hover:text-sky-700 rounded' to='/'>Home </Link>
                <Link className=' hover:text-sky-700 rounded'  to='/about'>About </Link>
                <Link className=' hover:text-sky-700 rounded' to='/restaurant'>Restaurant </Link>
               
            </div>
        </div>
    );
};

export default Header;