import React from 'react';
import RegisterModal from '../containers/Register'
const Banner = () => {
    
    return(
        <div style={{backgroundImage: "url('./img/slider02.jpg')"}}>
            <div className="container" >
                <div className="header-area fx-nv">
                <div className="row ">
                    <div className="col">
                        <div className="top_nv_mrg-4">
                            <p className="mrg-tp">Transformation | Innovation | Sustainability </p>
                            <h2 className="title">2020 Built Environment <br/> Conference And Expo </h2>
                            <div className="btn-wrapper">
                            </div>
                        </div>
                    </div>
                    <RegisterModal />
                </div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
       
        
    ) 
}

export default Banner;