import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from" @materialui.co/icon/shopping-basket";

function Header() {
  return (
    <div className='Header'>
        <div><img className='header_logo' src="https://www.sanskriticuttack.com/wp-content/uploads/2019/08/Sanskriti-Logo.png"/></div>
    <div className='header_search'><input className='header_searchInput' type="text"/><SearchIcon className='header_searchIcon'/></div>
    
        
    <div className='header_nav'>
    <div className='header_option'><ShoppingBasketIcon/></div>
        <div className='header_option'><span className='header_optionL1'>HELLO Guest</span><span className='header_optionL2'> sign in</span></div>
    <div className='header_option'>ShoppingCart</div>
        <div className='header_option'></div>
        </div>
    </div>
  )
}

export default Header