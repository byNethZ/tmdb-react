import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false);
            }
        })
        return()=>{
            window.removeEventListener('scroll');
        }
    }, [])
    
  return (
    <div className={`navbar ${show && 'nav_black'}`} >
        {/* netflix image */}
        <img
            className='nav_logo'
            src='http://www.freepnglogos.com/uploads/netflix-logo-0.png'
            alt='Netflix'
        />
        {/* avatar image */}
        <img
            className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Avatar'
        />
    </div>
  )
}

export default Navbar;