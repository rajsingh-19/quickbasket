import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div>
        Quick Basket <FaShoppingCart />
      </div>
      <div>
        <input /><FaSearch />
      </div>
      <div>
        <BsPersonCircle />
        <button>Login</button>
        <MdLogin />
      </div>
      <div>
      <FaShoppingCart />
      <IoCartOutline />
        Cart
      </div>
    </div>
  )
}

export default Header;
