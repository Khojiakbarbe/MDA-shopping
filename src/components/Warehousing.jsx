import React, { useState, useEffect } from "react";
import axios from "axios";



export default function Warehousing() {

    const [warehous, setWarehous] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/warehousing')
            .then(res => {
                setWarehous(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {warehous.map(post => {
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

            <div className="container optionalService">
                <h1 className="mb-5">We provide you with the following</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Dedicated warehousing</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Shared and multi-customer warehousing</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Short term and long term warehousing</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Transloading</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Cross docking</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Order picking</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Pick and pack</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Drop shipping</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Consolidation and deconsolidation</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-2">
                        <div className="optionalServiceBtn">
                            <h3>Along with many other value added services</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}