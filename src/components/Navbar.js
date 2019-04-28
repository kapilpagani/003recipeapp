import React from 'react';
// import logo from '../images/logo.svg';
import { Link, BrowserRouter } from 'react-router-dom';

export default function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light font-weight-bold">
                <Link to="/" className="navbar-brand text-slanted" id="im1" style={{ "marginRight": "60px" }}>Recipe App</Link>
                <div className="collapse navbar-collapse show">
                    <ul className="navbar-nav ">
                        <li className="navbar-item">
                            <Link className="nav-link text-primary mx-2" to="/">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link text-primary mx-2" to="/recipes">Recipes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </BrowserRouter>

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
