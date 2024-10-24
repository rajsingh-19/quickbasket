import React from 'react';
import "../styles/productCard.css";
import { MdCurrencyRupee } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = () => {
    return (
        <div className='productCard'>
            <img src={'/assets/placeholder.png'} alt="product placeholder" className='placeholderImg' />
            <div>
                <div>
                    <span><MdCurrencyRupee />500</span>&nbsp;
                    <small><strike>342</strike></small>
                </div>
                <p>Title of the Item</p>
            </div>
            <div>
                <button>Add to Card <FaShoppingCart /></button>
            </div>
        </div>
    )
}

export default ProductCard;
