import axios from "axios";
import React, { useEffect, useState } from "react";



export default function Purchase() {


    const [puechases, setPurchase] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/purchase')
            .then(res => {
                setPurchase(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            {puechases.map(post => {
                return (
                    <div className="row">
                        <div className="col-lg-6 col-d-12 purchaseTexts"  >
                            <div className="purchaseTexts">
                                <h1 className="mb-4">{post.name}</h1>
                                <p>{post.title}</p>
                                <p>{post.title2}</p>
                                {
                                    post.button.length != 0 ?
                                        <button className="btn btn-primary p-3">{post.button}</button>
                                        :
                                        ''
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 col-d-12" style={{ textAlign: 'end' }}>
                            <img src={post.img} alt="" />
                        </div>
                    </div>
                )
            })}


            <div className=" row p-5">
                <h1>How it works</h1>
                <div className="col-lg-4 col-d-12 p-2">
                    <div className="purchaseHowItWorks">
                        <h4>Provide information</h4>
                        <p>You’re providing information about the car model and the required spare part.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-d-12 p-2">
                    <div className="purchaseHowItWorks">
                        <h4>Provide information</h4>
                        <p>You’re providing information about the car model and the required spare part.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-d-12 p-2">
                    <div className="purchaseHowItWorks">
                        <h4>Provide information</h4>
                        <p>You’re providing information about the car model and the required spare part.</p>
                    </div>
                </div>
            </div>
        </>
    )
}