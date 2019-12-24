import React from 'react'
import Slider from 'react-slick'
import { parallax } from '../../main'


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


parallax()


const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-out",
    pauseOnHover: true,
    autoplaySpeed: 9000
}



const Carousel = () => {

    return(
        <React.Fragment>
            <Slider className="slider-cover" id="top" {...settings}>

                <div>
                    <div className="container-fluid slider" style={{backgroundImage: "url('./img/slider01.jpg')"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <h2>Transformation</h2>
                                    <h4>2020 Built Environment Conference And Expo</h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container-fluid slider" style={{backgroundImage: "url('./img/slider02.jpg')"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <h2>Innovation</h2>
                                    <h4>2020 Built Environment Conference And Expo</h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container-fluid slider" style={{backgroundImage: "url('./img/slider03.jpg')"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <h2>Sustainability</h2>
                                    <h4>2020 Built Environment Conference And Expo</h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </React.Fragment>
    )

}



export default Carousel