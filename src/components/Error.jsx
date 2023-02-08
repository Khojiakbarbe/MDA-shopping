import React from "react";

import error from '../images/error/error.avif'

export default function Error(){
    return(
        <div className="container w-50">
            <img src={error} className='img-fluid' style={{height:'600px'}}  alt="" />
        </div>
    )
}