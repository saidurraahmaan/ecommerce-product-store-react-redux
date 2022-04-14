import React from "react";
import {Link} from "react-router-dom";
import ProductListing from "./ProductListing";

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <Link to='/' element={<ProductListing/>}>FakeShop</Link>

            </div>
        </div>
    );
};

export default Header;