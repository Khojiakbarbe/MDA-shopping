import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { dataContext } from "./ContextProviders/DataProvider";

import contactUs from '../images/home/contactUs1.png'
import buyAssist from '../images/home/buyingAssistans.jpg'
import warehousing from '../images/home/warehousing.jpg'
import autoTranspost from '../images/home/autoTransport.jpg'
import automobileLoading from '../images/home/loading.jpg'
import motorcycle from '../images/home/motorcycle.jpg'
import boat from '../images/home/boat.jpg'
import heavy from '../images/home/heavy.jpg'
import dismantling from '../images/home/dismantling.jpg'
import purchase from '../images/home/purchase.jpg'
import Stepper from "./Stepper";




export default function Home() {

    const [data, setDataContext] = useContext(dataContext)

    return (
        <>
            <div className="toContactUs">
                <div className="row">
                    <div className="col-lg-6 col-md-12 ">
                        <div className="toContactText">
                            <h1>
                                We are an American based  company professionally provide
                                <br />
                                <span style={{ color: '#3579F4' }}>
                                    auto auction participating
                                </span>
                            </h1>
                            <p className="mt-4">We ship cars, motorcycles, boats, special machinery <br /> in containers from the USA to all over the world.</p>
                            <a href="#contactUs">
                                <button className="btn btn-primary contactUsHomeBtn">CONTACT US</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 ">
                        <div className="toContactImg">
                            <img src={contactUs} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Service */}
            <div className="container">
                <h5 id="servicesWeDo">SERVICES WE DO</h5>
                <div className="row">
                    <div className="col-lg-3 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link to='/buyingAssistance'>
                                <h3>Buying <br /> assistance</h3>
                                <img src={buyAssist} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link to='/autoTransport'>
                                <h3>Auto transpost</h3>
                                <img src={autoTranspost} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link to='/warehousing'>
                                <h3>Warehousing</h3>
                                <img src={warehousing} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link onClick={() => {
                                setDataContext('autoMobileLoading')
                            }} to='/automobileLoading'>
                                <h3>Automobile <br /> loading</h3>
                                <img src={automobileLoading} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link onClick={() => {
                                setDataContext('motorcycle')
                            }} to="/motorcycleLoading">
                                <h3>Motorcycle <br /> loading</h3>
                                <img src={motorcycle} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link onClick={() => {
                                setDataContext('boat')
                            }} to='/boat'>
                                <h3>Boat <br /> loading</h3>
                                <img src={boat} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link onClick={() => {
                                setDataContext('heavyMachinery')
                            }} to='/heavyMachinery'>
                                <h3>Heavy <br /> machinery <br /> loading</h3>
                                <img src={heavy} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link to='/dismantling'>
                                <h3>Dismantling</h3 >
                                <img src={dismantling} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="serviceCol">
                            <Link to='/purchase'>
                                <h3>Parts purchase <br /> assistance</h3>
                                <img src={purchase} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button id="aboutServiceBtn">MORE ABOUT SERVICE</button>
                </div>
            </div>
            <Stepper />
        </>
    )
}