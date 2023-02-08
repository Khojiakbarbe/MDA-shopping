import React, { useState } from "react";
import { Link } from "react-router-dom";
import contactUs from '../images/footer/contactUs.png'
import logo from '../images/footer/logo.png'
import telegram from '../images/footer/telegram.png'
import whatsapp from '../images/footer/whatsapp.png'

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();


    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    function handleSave(e) {
        axios.post('http://localhost:9000/contactUs',
            { name, phone, message }
        )
            .then(res => {
                alert('your info saved');
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <footer>
                <div className="contactMessage" id="contactUs">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 p-5">
                            <h1>
                                Contact us
                            </h1>
                            <p>Contact us if you need more information
                                about our services</p>
                            <input type="text" onChange={e => setName(e.target.value)} className="form-control" style={{ backgroundColor: '#5591FF', border: 'none' }} placeholder="Name" />
                            <input type="number" onChange={e => setPhone(e.target.value)} className="form-control mt-3" style={{ backgroundColor: '#5591FF', border: 'none' }} placeholder="Phone Number" />
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label"></label>
                                <textarea className="form-control" onChange={e => setMessage(e.target.value)} style={{ backgroundColor: '#5591FF', border: 'none' }} id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                            </div>
                            <input type="checkbox" id="agree" style={{ marginRight: '2%' }} />
                            <label htmlFor="agree">I agree with the <span style={{ textDecoration: 'underline' }}>Privacy policy</span></label>
                            <button onClick={handleSave} className="sendMessageBtn mt-3" >SEND A MESSAGE</button>
                        </div>
                        <div className="col-lg-8 col-md-12 contactMessageImg">
                            <img src={contactUs} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>

                <div className="footerLink row p-5">
                    <div className="col-lg-4 col-md-12">
                        <img src={logo} className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <Link className="mt-5" to='/'>
                            HOME
                        </Link>
                        <br />
                        <Link className="mt-5" to='/services'>
                            SERVICES
                        </Link>
                        <br />
                        <Link className="mt-5" to='/'>
                            CONTACTS
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <button className="messengers">
                            <a href="https://web.whatsapp.com/">
                                <img src={whatsapp} alt="" />
                            </a>
                        </button>
                        <button className="messengers">
                            <a href="https://t.me/xojiakbarbek">
                                <img src={telegram} alt="" />
                            </a>
                        </button>
                        <p>info@cargo.us</p>
                        <p>+1 912 000 0000</p>
                    </div>
                </div>
            </footer>
        </>
    )
}