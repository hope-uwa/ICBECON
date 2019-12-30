import React, {useEffect} from 'react';
import BreadCrumbs from '../containers/common/BreadCrumbs';
import { withRouter } from 'react-router-dom'

const Abstract = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])
    const width = window.screen.width < 769 ? window.screen.width*0.9 : window.screen.width * 0.5
    console.log({width})
    return (
        <React.Fragment>
            <BreadCrumbs title={'Abstract'} />
            <section className="about abstract">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
        
                        <div className="about-text">
                           
                            
                            <div id='abstract' className='abstract-container' >
                                <h2>Abstracts</h2>
                                    <p>
                                        Authors are invited to submit 200-300-word abstracts to the International Construction 
                                        and Built Environment Conference (ICBECONF 2020), with the theme Innovation, Sustainability 
                                        and Transformation in the Built Environment, taking place in Lagos, 
                                        Nigeria on the <strong>20th to 21st of May, 2020.</strong>
                                        Authors should indicate the topic area from technical paper session topics appropriate for their paper.

                                    </p>

                                    
                                    

                            </div>
                           
                        </div>
                    </div>

                    </div>
                    <div className='row' >
                       
                        <div className='col-md-4 col-sm-12 abstract-submission'>
                            <h2>Submission Deadlines</h2>
                                    
                                    <ul>
                                        <li>
                                            Abstract Submission Deadline: <strong>January 30, 2020</strong>
                                        </li>
                                        <li>
                                            Abstract Acceptance Notification: <strong>February 30, 2020</strong>
                                        </li>
                                        <li>
                                            Full Paper Submission Deadline: <strong> March 28, 2020</strong>
                                        </li>
                                        <li>
                                            Full Paper Acceptance and Review Comments Notification: <strong>April 30, 2020</strong>
                                        </li>
                                        <li>
                                            Camera-Ready Final Full Paper Deadline for Inclusion in the Proceedings: <strong>May 15, 2020</strong>
                                        </li>
                                    </ul>
                                <p>
                                At the conference, all presenters will have 20-30 minutes for a PowerPoint presentation on their paper and must bring their presentation to the conference on a USB flash drive.
                                </p>
                            <p>For any submission questions, authors may contact Conference Secretariat:
                            abc@unilag.edu.ng, <br/>
                            +234 80500000, <br/> 
                            +234 80950000, <br/>
                            Department of Building, <br/>
                            Faculty of Environmental Sciences, <br/>
                            University of Lagos, <br/>
                            info@icbeconf.com
                            </p>
                        </div>
                        <div className='col-md-8 col-sm-12'>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdXNInak0upmRBrYIS1fEBX8B3eZi_rgK0dxuJ1eAVxseJyGQ/viewform?embedded=true" width={width} height="4817" frameBorder="0" marginHeight="0" marginWidth="0" title="Publication Form">Loading…</iframe>
                        </div>
                        
                    </div>
                    <div className='row'>

                  
                    </div>
                </div>
            </section>
           
        </React.Fragment>
       
    )
}

export default withRouter(Abstract);