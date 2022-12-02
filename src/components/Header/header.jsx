import React from 'react';
import {Link} from "react-router-dom";

function Header(){
    return (
        <header>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Loger Search</Link>
            </div>
        </nav>
        </header>
    );
}

export default Header;