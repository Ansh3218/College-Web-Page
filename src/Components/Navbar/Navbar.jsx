import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import menu_icon from '../../assets/images/menu-icon.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);

        const [mobileMenu, setMobileMenu] = useState(false);
        const toggleMenu = ()=> {
            mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
        }

    return (
        <>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
                <img src={logo} alt="" className='logo' />
                <ul className={mobileMenu? "":"hide-mobile-menu"}>
                    <li><a href=""><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></a></li>
                    <li><a href=""><Link to="about" smooth={true} offset={-260} duration={500}>About</Link></a></li>
                    <li><a href=""><Link to="contact" smooth={true} offset={-150} duration={500}>Contact</Link></a></li>
                    <li><a href=""><Link to="service" smooth={true} offset={-260} duration={500}>Service</Link></a></li>
                    {/*  */}
                </ul>
                <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
            </nav>
        </>
    )
}
export default Navbar
;
