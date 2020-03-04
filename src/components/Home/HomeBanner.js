import React from 'react';
//import RegisterModal from '../containers/Register'
import RegistrationInfo from '../containers/RegistrationInfoModal'
//import bannerImg from '../../assets/slider02.jpg'
import senate from '../../assets/senate-building.jpg'
const Banner = () => {
    
    return(
        
             <div style={{backgroundImage: `url(${senate})`, backgroundSize: 'cover'}}>
             <div style={{ position: 'absolute', height: '100%', width: '100%', color: 'black'}}> </div>
            <div className="container" style={{maxWidth: 'fit-content', background: '#00000070'}}>
                <div className="header-area fx-nv">
                <div className="row ">
                    <div className="col">
                        <div className="top_banner">
                            <p className="mrg-tp">Transformation | Innovation | Sustainability </p>
                            <h2 className="">International Construction and Built Environment Conference (ICBECONF 2020)</h2>
                            <div className="btn-wrapper">
                            </div>
                        </div>
                    </div>
                    <RegistrationInfo />
                    {/* <RegisterModal /> */}
                </div>
                </div>
                <div className="clear"></div>
            </div>
        </div>

       
       
        
    ) 
}

export default Banner;