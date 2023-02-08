import React, { useState, useEffect } from "react";
import axios from "axios";



export default function Details() {

    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/dismantling')
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            {info.map(post => {
                return (
                    <div key={post.id} className="row mt-5">
                        <div className="col-lg-6">
                            <h1>{post.name}</h1>
                            <h3 style={{ color: 'blue' }}>{post.blogName}</h3>
                            <p>{post.title}</p>
                            <p>{post.title2}</p>
                            {
                                post.button.length != 0 ?
                                    <button className="btn btn-primary p-3 mb-5">{post.button}</button>
                                    :
                                    ''
                            }
                        </div>
                        <div className="col-lg-6" style={{ textAlign: 'end' }}>
                            <img src={post.img} className='img-fluid' alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}