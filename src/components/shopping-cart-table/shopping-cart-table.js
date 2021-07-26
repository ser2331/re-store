import React from "react";
import './shopping-cart-table.scss'
const ShoppingCartTable = () => {
    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <hr/>
            <table className='table'>
                <thead>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
                </thead>
                <hr/>
                <tbody>
                <td>1</td>
                <td>Site Reliability Engineering</td>
                <td>2</td>
                <td>$40</td>
                <td>
                    <button className='btn btn-outline-success'>
                        <i className='bi bi-bag-plus'></i>
                    </button>
                    <button className='btn btn-outline-warning'>
                        <i className='bi bi-bag-dash'></i>
                    </button>
                    <button className='btn btn-outline-danger'>
                        <i className='bi bi-trash'></i>
                    </button>
                </td>
                </tbody>
            </table>
            <div className='total'>
                Total: $205
            </div>
        </div>
    )
}
export default ShoppingCartTable