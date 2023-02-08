import React, { useState, useEffect } from "react";
import axios from "axios";


export default function BuyingAssistance() {

    const [assistance, setAssistance] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/buyingAssistance')
            .then(res => {
                setAssistance(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {assistance.map(post => {
                return (
                    <div key={post.id} className="row mt-3">
                        <div className="col-lg-6 col-md-12 p-3">
                            <div className="buyAssistText">
                                <h1>{post.name}</h1>
                                <p>{post.title}</p>
                                {
                                    post.button.length != 0 ?
                                        <button className="btn btn-primary p-3">{post.button}</button>
                                        :
                                        ''
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-3" style={{ textAlign: 'end' }}>
                            <img src={post.img} className='buyingImg' alt="" />
                        </div>
                    </div>
                )
            })}

            <div className="container row" style={{ margin: '0 auto' }}>
                <h1>How it works</h1>
                <div className="col-lg-4 col-md-12 p-3">
                    <div className="buyAssHowWork">
                        <h3>Choose a car</h3>
                        <p>Visit one of the auto auctions and choose a car. Auto auctions that take place online should post pictures of the vehicles you’re bidding on, and if they don’t — we wouldn’t trust them. You can buy many different vehicles from online auto auctions, from junkers to project cars to expensive, high-end vehicles.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 p-3">
                    <div className="buyAssHowWork">
                        <h3>Provide an information</h3>
                        <p>Every auction will have several pieces of information that you’ll need to supply to  shipping company. </p>
                        <h5 style={{ color: '#3579F4' }}>This information includes</h5>
                        <ul>
                            <li>Lot Number</li>
                            <li>Buyer Number</li>
                            <li>Release Form</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 p-3">
                    <div className="buyAssHowWork">
                        <h3>Deliver from the auction to our yard</h3>
                        <p>After bidding, the vehicle will be sent to our yard for storage until departure.</p>
                    </div>
                </div>
            </div>

            <div className="container optionalService mt-5">
                <h1 className="mb-5">Optional services</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Cargo insurance</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Long term cargo storage</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Detailing and cleaning</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Additional report and inspection</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Plastic film coverage of broken part</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Moisture bags to avoid mold</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}