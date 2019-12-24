import React from 'react'



const About = (props) => {
    return(
        <React.Fragment>
            <div className="container-fluid about" id="about" style={{backgroundImage:"url('./img/about_bg.jpg')"}}>
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 offset-md-1">
                            <div className="col-12 about-back-spin" style={{backgroundImage:"url('./img/about2.png')"}}></div>
                            <div className="col-12 about-back-img" >
                                <div className='about-back-text'>
                                 20th & 21st <span> May 2020</span> <br/>
                                 <span style={{fontSize: 24}}>Main Auditorium <br/> University of Lagos</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 offset-md-1">
                            <h2>About this conference</h2>
                            <p>
                            The Conference & Expo is aimed at bringing together hundreds of building industry professionals, researchers and experts 
                            from academia to explore strategies aimed at Optimized solutions for both the present and the future. .
                            </p>
                            

                            <button className="btn btn-outline-danger" onClick={()=> props.history.push('about-conference')}>Read More</button>
                        </div>

                       

                       

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default About