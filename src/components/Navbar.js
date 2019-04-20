import React from 'react';
// import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light font-weight-bold">
            <Link to="/" className="navbar-brand text-slanted" id="im1">Recipe Application</Link>
            <div className="collapse navbar-collapse show">
                <ul className="navbar-nav ">
                    <li className="navbar-item">
                        <Link className="nav-link text-primary" to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link text-primary" to="/recipes">Recipes</Link>
                    </li>
                </ul>
            </div>
        </nav>

        //     <div role="navigation">
        //     <div class="navbar navbar-inverse navbar-expand-sm navbar-light bg-light">
        //         <Link to="/" class="navbar-brand" id="im1">Recipe Application</Link>
        //         <div class="navbar-collapse collapse">
        //             <ul class="nav navbar-nav">
        //                 <li className="navbar-item"><Link to="/">Home</Link></li>
        //                 <li className="navbar-item"><Link to="/recipes">Recipes</Liink0></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}
