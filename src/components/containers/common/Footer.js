import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = (props) => {
    const { history } = props
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                        <div class="footer-pages">
                            <h3>Usefull Links</h3>
                            <div class="row">
                                <div class="col-sm-12">
                                <ul>
                                    <li><a onClick={()=> history.push('about-conference')} >About Conference </a></li>
                                    <li><a onClick={()=> history.push('/')}> Publications.</a></li>
                                    <li><a onClick={()=> history.push('/')} href="#committee"> Commitee Members.</a></li>
                                    <li><a onClick={()=> history.push('/')} href="#speaker"> Speakers</a></li>
                                    <li><a href="#"><i class="fa fa-chevron-right"></i> Contact Us</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-contact-info">
                            <ul>
                                <li>
                                <div className="round-icn">	<i className="fa fa-location-arrow"></i></div>
                                <a href="index_03.html#">
                                Building Department <br/>
                                Faculty of Environmental Science</a>
                                </li>
                                <li>
                                <div className="round-icn">	<i className="fa fa-envelope"></i></div>
                                <a href="index_03.html#">
                                info@icbeconf.com <br/>
                                info@icbeconf.com
                                </a>
                                </li>
                                <li>
                                <div className="round-icn">	<i className="fa fa-phone"></i></div>
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