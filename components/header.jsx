import React from 'react';
import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-purple-700 h-16 flex justify-center'  >
            <ul className='flex items-center justify-center'>
                <li className='active:scale-90'><Link href='/'><a className='mx-5 font-semibold  hover:bg-sky-600 px-5 py-3 rounded-lg transition-all duration-150  delay-100'>Home
                </a></Link></li>
                <li className='active:scale-90'><Link href='/blog'><a className='mx-5 font-semibold  hover:bg-sky-600 px-5 py-3 rounded-lg transition-all duration-150  delay-100'>Blog</a></Link></li>
                <li className='active:scale-90'><Link href='/contact'><a className='mx-5 font-semibold  hover:bg-sky-600 px-5 py-3 rounded-lg transition-all duration-100   ease-in'>Contact</a></Link></li>
            </ul>
        </header>
    );
};

export default Header;