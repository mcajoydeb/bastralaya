import React, { ReactNode } from "react";

const CommonComponent =()=>{
    return(
        <>
            <section className="reservation-line-section p-r z-1 pt-130 pb-80">
            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        
                        <div className="reservation-image-box wow fadeInLeft mb-50 mb-20" style={{visibility: "visible"}}>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/menu/menu-single-1.jpg" alt="Reservation Image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="reservation-content-box content-box-gap wow fadeInRight mb-50 pl-lg-70" style={{visibility: "visible"}}>
                            <div className="section-title section-title-left mb-20">
                                <span className="sub-title">Booking table</span>
                                <h2>Make A Reservations</h2>
                            </div>
                            <p>Sit amet consectetur adipiscing elitsue risus mauris 
                                adipiscing phasellus aene ante orcirat</p>
                        
                            <div className="reservation-style-one">
                                <form className="reservation-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <label><i className="far fa-user"></i></label>
                                                <input type="text" className="form_control" placeholder="Person" name="number" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <label><i className="far fa-calendar-alt"></i></label>
                                                <input type="text" className="form_control hasDatepicker" id="datepicker" placeholder="Reserved Date" name="date" />
                                            </div>
                                        </div>
                             
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <button className="main-btn btn-red">book a table <i className="far fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CommonComponent