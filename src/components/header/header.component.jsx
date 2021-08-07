import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/logo.svg'
const Header=({currentUser})=>{
  
    return <div className="header">
    <Link to="/">
    <Logo className="logo"/></Link>
    <div className="options">
    <Link to="/shop" className="option">Shop</Link>
    <Link to="/shop" className="option">Contact</Link>
    {currentUser?<div className="option" onClick={()=>{
        auth.signOut();
    }}>
    Sign Out
    </div>
    : <Link className="option" to="/login">
        Sign In
    </Link>
    }
    
    </div>

    </div>
}
export default Header;