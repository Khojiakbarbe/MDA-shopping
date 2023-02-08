import React from "react";
import buyAssist from '../images/home/buyingAssistans.jpg'
import warehousing from '../images/home/warehousing.jpg'
import autoTranspost from '../images/home/autoTransport.jpg'
import automobileLoading from '../images/home/loading.jpg'
import motorcycle from '../images/home/motorcycle.jpg'
import boat from '../images/home/boat.jpg'
import heavy from '../images/home/heavy.jpg'
import dismantling from '../images/home/dismantling.jpg'
import purchase from '../images/home/purchase.jpg'


export default function Services() {
    return (
        <div className="container">
            <h5 id="servicesWeDo">SERVICES WE DO</h5>
            <div className="row ">
                <div className="col-lg-3 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Buying <br /> assistance</h3>
                        <img src={buyAssist} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Auto transpost</h3>
                        <img src={autoTranspost} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Warehousing</h3>
                        <img src={warehousing} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Automobile <br /> loading</h3>
                        <img src={automobileLoading} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Motorcycle <br /> loading</h3>
                        <img src={motorcycle} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Boat <br /> loading</h3>
                        <img src={boat} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Heavy <br /> machinery <br /> loading</h3>
                        <img src={heavy} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Dismantling</h3>
                        <img src={dismantling} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 p-2">
                    <div className="serviceCol">
                        <h3>Parts purchase <br /> assistance</h3>
                        <img src={purchase} alt="" />
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6 col-md-12">
                    <h3 style={{ color: '#3579F4' }}>WHY YOU SHOULD CHOOSE US</h3>
                </div>
                <div className="col-lg-6 col-md-12">
                    <p>We provide full range of logistics related outsourcing services for Freight Forwarders, NVOCCs, Auto Dealers and other Exporters in International Freight Industry.</p>
                    <p>We can handle any kind of commodity and specialize in automotive industry. Our Export Management program will help you to save the most money possible.</p>                    {/* <br /> */}
                    <p>We provide you with the safest loading process and inventory management along with Cargo Receipts and Inspection Reports. You will receive all photos of cargo at the time of receipt and at loading. It can be a great opportunity for you to expand your operation in South East of USA.</p>
                </div>
            </div>
        </div>
    )
}