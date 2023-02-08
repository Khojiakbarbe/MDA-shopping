import React, { useState, useEffect } from "react";
import axios from "axios";


export default function AutoTransport() {

    const [transports, setTransports] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/autoTransport')
            .then(res => {
                setTransports(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {transports.map(post => {
                return (
                    <div key={post.id} className="row mt-3">
                        <div className="col-lg-6 col-md-12 p-3">
                            <div className="autoTransportText">
                                <h1>{post.name}</h1>
                                {
                                    post.blogName.length != 0 ?
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h3>{post.blogName}</h3>
                                            </div>
                                            <div className="col-lg-8 mt-2 mb-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="995" height="4" viewBox="0 0 995 4" fillRule="none">
                                                    <path d="M2 2L993 2.00009" stroke="#3579F4" stroke-width="3" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        :
                                        ''
                                }
                                <p>{post.title}</p>
                                {
                                    post.blueText1.legth != 0 ?
                                        <h5>{post.blueText1}</h5>
                                        :
                                        ''
                                }
                                {
                                    post.blueText2.legth != 0 ?
                                        <h5>{post.blueText2}</h5>
                                        :
                                        ''
                                }
                                {
                                    post.blueText3.legth != 0 ?
                                        <h5>{post.blueText3}</h5>
                                        :
                                        ''
                                }
                                <p>{post.title2}</p>

                                {
                                    post.button.length != 0 ?
                                        <button className="btn btn-primary p-3">{post.button}</button>
                                        :
                                        ''
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 " style={{ textAlign: 'end' }}>
                            <img src={post.img} className='autoTransportImg' alt="" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}