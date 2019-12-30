import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const Footer = (props) => {
    const { history } = props
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                    <div className="footer-about">
                       
                        <h2 style={{color: '#be2b65'}}>ICBECONF 2020</h2>
                        <p>International Construction and Built Environment Conference</p>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
                           
                            <li><a href="#"> <FontAwesomeIcon icon={faLinkedin}/></a></li>
                           
                        </ul>
                    </div>

                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="footer-pages">
                            <h3>Usefull Links</h3>
                            <div className="row">
                                <div className="col-sm-12">
                                <ul>
                                    <li><a onClick={()=> history.push('about-conference')} href="javascript::" >About Conference </a></li>
                                   
                                    <li><a onClick={()=> history.push('/')} href="#committee"> Commitee Members.</a></li>
                                    <li><a onClick={()=> history.push('/speakers')} href="javascript::"> Speakers</a></li>
                                    <li><a onClick={()=> history.push('/abstract-submission')} href="javascript::"> Submit Abstract</a></li>
                                    <li><a href="#"><i className="fa fa-chevron-right"></i> Contact Us</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-contact-info">
                            <ul>
                                <li>
                                <div className="round-icn">	<FontAwesomeIcon icon={faLocationArrow}/></div>
                                <a href="index_03.html#">
                                Building Department <br/>
                                Faculty of Environmental Science</a>
                                </li>
                                <li>
                                <div className="round-icn"><FontAwesomeIcon icon={faEnvelope}/></div>
                                <a href="index_03.html#">
                                info@icbeconf.com <br/>
                                info@icbeconf.com
                                </a>
                                </li>
                                <li>
                                <div className="round-icn">	<FontAwesomeIcon icon={faPhone}/></div>
                                <a href="index_03.html#">
                                +234 456-7890-345<br/>
                                +234 456-7890-345
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="copyright-text">
                                    <p className="color-white">Copyright © 2019 All Rights Reserved </p>
                                    {/* <span href="index_03.html#">eventsfy</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </footer>
    )
}

export default withRouter(Footer);