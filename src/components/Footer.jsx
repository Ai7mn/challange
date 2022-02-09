import React, { Component } from 'react';
import NavItems from "./NavItems";
import './footer.css';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className = 'FooterItems' >
                <a className='AppName' href='/#'>App<span>Lab</span></a>
                <ul>
                    {NavItems.map((item , index) => {
                        return(
                            <li key={item.id} ><Link  className={item.cName} to={item.url}>
                                {item.title}
                                </Link>
                                </li>
                        )
                        
                    })}
                </ul>
            </footer>
        )
    }
}

export default Footer;