
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight, FaTimes } from "react-icons/fa";
// import { BiGridAlt} from "react-icons/bi";
function Nav() {
    // const linkings = e =>{
    //     alert('hello');
    //     window.location.href='./dashboard'
    // }
    const {isMobile, setIsMobile} = useState(false);

    // const navLink ={
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     marginRight: '23px'
    // }
    // const dropdown = e =>{
    //     alert('hello');
    //  }
    return(
        <nav className='navbar'>
            {/* <ul>
                <li ><BiGridAlt/></li>
                <li onClick={linkings}><FaAlignRight /></li>
            </ul> */}
            <h3 className='logo'>Logo</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={()=>setIsMobile(false)}>
                <Link to='/' className="home">
                    <li>home</li>
                </Link>
                <Link to='/' className="skills">
                    <li>skills</li>
                </Link>
                <Link to='/contact' className="contact">
                    <li>contact</li>
                </Link>
                <Link to='/about' className="about">
                    <li>about</li>
                </Link>
                <Link to='/signup' className="signup">
                    <li>signup</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon'>
                {isMobile ? (
                    <li><FaTimes/></li>
                ) : (
                    <li><FaAlignRight /></li>
                ) }
            </button>
        </nav>
    )
}

export default Nav;