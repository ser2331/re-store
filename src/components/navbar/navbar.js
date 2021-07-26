import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
                <div className="nav nav-tabs  ">
                    <Link to='/' className="nav-link active" href="#">Home</Link>
                    <Link to='/cart' className="nav-link" href="#">Cart</Link>
                </div>
    )
}
export default Navbar