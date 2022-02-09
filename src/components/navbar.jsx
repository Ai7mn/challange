import React, { Component } from 'react';
import NavItems from "./NavItems";
import './navbar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className = 'NavbarItems' >
                <a className='AppName' href="/">App<span>Lab</span></a>
                <ul>
                    {NavItems.map((item , index) => {
                        return(
                            <li key={item.id} ><Link  to={item.url} className={item.cName}>
                                {item.title}
                                </Link>
                                </li>
                        )
                        
                    })}
                    <li><a  className='try-link' href="/#">
                    Try for Free
                                </a>
                                </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;