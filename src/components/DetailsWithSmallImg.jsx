import React, { useContext } from "react";

import { dataContext } from './ContextProviders/DataProvider'


export default function DetailsWithSmallImg() {

    const [info] = useContext(dataContext)



    return (
        <div className="container">
            {info.map(post => {
                return (
                    <div key={post.id} className="row mt-">
                        <div className="col-lg-6">
                            <h1>{post.name}</h1>
                            {
                                post.blogName.length != 0 ?
                                    <>

                                        <div className="row">
                                            <div className="col-lg-5">
                                                <h3 style={{ color: 'blue' }}>
                                                    {post.blogName}
                                                </h3>
                                            </div>
                                            <div className="col-lg-7">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="995" height="4" viewBox="0 0 995 4" fillRule="none">
                                                    <path d="M2 2L993 2.00009" stroke="#3579F4" stroke-width="3" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    ''
                            }
                            <p>{post.title}</p>
                            <h3 style={{ color: 'blue' }}>{post.blueText}</h3>
                            <p>{post.title2}</p>
                            <div className="row " style={{ width: '80%' }}>
                                <div className="col-md-4 p-2" >
                                    <div className='smallImg'>
                                        {
                                            post.smallImg1 != 0 ?
                                                <img src={post.smallImg1} alt="" />
                                                :
                                                ''
                                        }
                                    </div>
                                </div>
                                <div className="col-md-4 p-2" >
                                    <div className='smallImg'>
                                        {
                                            post.smallImg1 != 0 ?
                                                <img src={post.smallImg2} alt="" />
                                                :
                                                ''
                                        }
                                    </div>
                                </div>
                                <div className="col-md-4 p-2" >
                                    <div className='smallImg'>
                                        {
                                            post.smallImg1 != 0 ?
                                                <img src={post.smallImg3} alt="" />
                                                :
                                                ''
                                        }
                                    </div>
                                </div>
                                <div className="col-md-4 p-2" >
                                    <div className='smallImg'>

                                        {
                                            post.smallImg1 != 0 ?
                                                <img src={post.smallImg4} alt="" />
                                                :
                                                ''
                                        }
                                    </div>
                                </div>
                                <div className="col-md-4 p-2" >
                                    <div className='smallImg'>
                                        {
                                            post.smallImg1 != 0 ?
                                                <img src={post.smallImg5} alt="" />
                                                :
                                                ''
                                        }
                                    </div>
                                </div>
                                <div className="col-md-4 p-2" >
                                    <div className='smallImg'>
                                        {
                                            post.smallImg1 != 0 ?
                                                <img src={post.smallImg6} alt="" />
                                                :
                                                ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5" style={{ textAlign: 'end' }}>
                            <img src={post.img} className='mt-5' style={{ width: "100%" }} alt="" />
                        </div>
                    </div>
                )
            })}


            <div className="optionalService">
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
        </div>
    )
}