import React from "react";
import './shop-header.scss'
const ShopHeader = ({numItems, total}) => {
    return (

                <header className="d-flex justify-content-md-between py-3 border-bottom shop-header">
                    <a  className="logo text-dark" href="#">ReStore</a>
                    <a  className='shopping-cart' href="#">
                    <i  className="bi bi-cart4"/>
                        {numItems} items (${total})
                    </a>
                </header>
    )
}
export default ShopHeader