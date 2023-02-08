import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import logo from '../images/navbar/logo.png'
import telegram from '../images/navbar/telegram.png'
import whatsapp from '../images/navbar/whatsapp.png'

import { Link } from 'react-router-dom'


export default function MyNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} expand='lg' className='container'>
                <NavbarBrand >
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="me-auto navbarLinks" navbar >
                        <NavItem>
                            <NavLink>
                                <Link to='/'>
                                    Home
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to='/services'>
                                    Services
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <a href="#contactUs">
                                    Contacts
                                </a>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <button className='messengers navbarMessengerBtn' style={{ marginLeft: '-25%' }}>
                            <a href="https://t.me/xojiakbarbek">
                                <img src={telegram} alt="" />
                            </a>
                        </button>
                    </NavbarText>
                    <NavbarText>
                        <button className='messengers navbarMessengerBtn'>
                            <a href="https://web.whatsapp.com/">
                                <img src={whatsapp} alt="" />
                            </a>
                        </button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
