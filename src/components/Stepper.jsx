import React from "react";
import courier from '../images/home/delivery-courier.png'
import truck from '../images/home/delivery-truck.png'
import container from '../images/home/container.png'
import packages from '../images/home/packages.png'
import ship from '../images/home/cargoShip.png'

export default function Steper() {
    return (
        <div className="container">
            <h1 className="howItWorks mb-5">How it works</h1>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                <div className="steppersDiv">
                                    <div className="stepperImg">
                                        <img src={courier} alt="" />
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="995" height="4" viewBox="0 0 995 4" fillRule="none">
                                        <path d="M2 2L993 2.00009" stroke="#3579F4" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                    <h3 className="stepperH3">Bid and buy a lot</h3>
                                    <p className="stepperP">There's a wide variety of auctions where bargains can be had at wholesale prices for buyers who know what they’re doing.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="steppersDiv">
                                    <div className="stepperImg">
                                        <img src={truck} alt="" />
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="995" height="4" viewBox="0 0 995 4" fillRule="none">
                                        <path d="M2 2L993 2.00009" stroke="#3579F4" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                    <h3 className="stepperH3">Deliver your units from the auction to our yard</h3>
                                    <p className="stepperP">After bidding, the vehicle will be sent to our yard
                                        for storage until departure.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="steppersDiv">
                                    <div className="stepperImg">
                                        <img src={container} alt="" />
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="995" height="4" viewBox="0 0 995 4" fillRule="none">
                                        <path d="M2 2L993 2.00009" stroke="#3579F4" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                    <h3 className="stepperH3">Load your vehicles into a container</h3>
                                    <p className="stepperP">At our loading facility your car is driven into the container and carefully positioned before all four wheels are safely chocked.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="steppersDiv">
                                    <div className="stepperImg">
                                        <img src={packages} alt="" />
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="995" height="4" viewBox="0 0 995 4" fillRule="none">
                                        <path d="M2 2L993 2.00009" stroke="#3579F4" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                    <h3 className="stepperH3">Buy all the spare parts if necessary</h3>
                                    <p className="stepperP">We offer original spare parts and components for the different types of vehicles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                <div className="steppersDiv">
                                    <div className="stepperImg">
                                        <img src={ship} alt="" />
                                    </div>
                                    <h3 className="stepperH3">Ship the container to your place</h3>
                                    <p className="stepperP">Your car will arrive at the destination in the condition it was loaded in the container.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}