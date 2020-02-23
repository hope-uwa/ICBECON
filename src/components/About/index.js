import React, {useEffect} from 'react';
import BreadCrumbs from '../containers/common/BreadCrumbs';



const topics = [
    'Affordable Housing Materials and Construction',
    ' Aging-in-Place and Senior Living Housing',
    ' Alternative construction technologies',
    ' Alternative Renewable Energy Generating Systems',
    'Artificial Intelligence and Robotics in Construction',
    'Automation and Robotics in Construction',
    'Building conversion and renewal',
    'Building economics and cost management',
    'Building Information Modelling (BIM) Application in Construction',
    'Building Integrated Photovoltaic Systems',
    'Building Performance Assessment/Metrics/Verification Methods and Occupant Behaviour',
    'Building Science and Building Enclosures',
    'Culture, structure and strategies of firms in the built environment',
    'Digitalisation and model printing in construction',
    'Education of Design & Construction',
    'Energy Efficient Building Components',
    'Entrepreneurship in construction',
    'Facilities management',
    'Failure and Collapse of Buildings',
    'Fire Damage and Protection',
    'Health, Safety and Environment Management in the Built Environment',
    'High Performance Residential Buildings',
    'Indoor Air Quality',
    'Innovations in Architecture and Design',
    'Innovations in Green Roofs and Façade/Envelope Systems',
    'Innovations in Modular and Manufactured Housing',
    'Innovative and Emerging Housing Construction Methods/Systems',
    'Innovative Wall, Floor, Roof, Window, and Siding Systems',
    'Learning from the Performance of Buildings under Natural Disasters',
    'Low-Income and Affordable Housing',
    'Maintenance management of buildings',
    'Maintenance management of historical/monumental buildings',
    'Panelised Building Components',
    'Passive House Designs',
    'Productivity Studies in the Built Environment',
    'Professional Ethics in the Construction Industry',
    'Real estate management',
    'Resilient Designs',
    'Retrofit of Buildings ',
    ' Rural and Urban Housing Materials and Construction',
    'Serviceability and Life Safety Damage Aspects',
    'Smart Home Technologies, Design and Construction',
    'Supply Chain Management and Procurement in Construction',
    'Sustainable Designs and Green Architecture',
    'Sustainable Housing Construction Materials and Methods',
    'Temporary Housing for Disaster Situations',
    'Training and skills development in construction',
    'Urban planning for the future',
    'Whole Building Design Approach',
    'Zero-Net Energy Homes'
]
const AboutPage = (props) => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    return(
      <React.Fragment>
            <BreadCrumbs title={'About'} />
            <section id="about_02" className="about">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
        
                        <div className="about-text">
                           
                            
                            <h2><strong>Theme: </strong> Innovation, Sustainability and Transformation in the Built Environment </h2>
                            <p>We are delighted to bring to your notice the maiden edition of the annual International Construction and Built 
                            Environment Conference, with the theme: <strong > Innovation, Sustainability and Transformation in the Built Environment</strong>, 
                            taking place in Lagos, Nigeria on the <strong>10th to 11th of June, 2020.</strong> It will feature Conference and Expo on Built 
                            Environment issues. </p>
                            <p>Our keenly designed agenda by the committee members and professionals will feature 
                            presentations on relevant topics. It will also be a forum for construction organizations, manufacturers 
                            and service providers to present and bring to fore their products, thereby stimulating patronages, 
                            collaborations and global partnering among participants and stakeholders during and after the event. 
                            </p>
                            <p>The international panel of keynote speakers and presenters will facilitate engaging discussions and 
                                learning opportunities. This will be an unmatched opportunity to interact and learn from researchers, 
                                practitioners, business moguls, developers, students and scholars around the globe to bring solutions 
                                to built environment problems. It is imperative to participate in the event by joining discussions and 
                                disseminating your research findings. This year's conference and expo aim to promote innovation, 
                                transformation and sustainability in the built environment at the global level. 
                            </p>
                           
                            <ul>
                            {
                                topics.map((topic, index) => 
                                    <li key={index}> {topic}</li> 
                                )}
                            </ul>
                            
                            <div id='abstract' className='abstract-container' >
                                <h2>Abstracts Submission</h2>
                                    <p>
                                        Authors are invited to submit 200-300-word abstracts to the International Construction 
                                        and Built Environment Conference (ICBECONF 2020), with the theme Innovation, Sustainability 
                                        and Transformation in the Built Environment, taking place in Lagos, 
                                        Nigeria on the <strong>10th to 11th of June, 2020.</strong>
                                        Authors should indicate the topic area from technical paper session topics appropriate for their paper.

                                    </p>

                                    <p> Submit abstracts Here
                                        <a style={{color: '#be2b65', display: 'inline', cursor: 'pointer'}} onClick={()=> props.history.push('/abstract-submission')}> ABSTRACT SUBMISSION </a>
                                    </p>
                                    <p>For any submission questions, authors may contact Conference Secretariat:

                                        <br/>
                                        +234 805-705-8667<br/>
                                        +234 803-785-5322 <br/>
                                        Department of Building, <br/>
                                        Faculty of Environmental Sciences, <br/>
                                        University of Lagos, <br/>
                                        info@icbeconf.com
                                    </p>

                                    <h2>Submission Deadlines</h2>
                                    
                                    <ul>
                                        <li>
                                            Abstract Submission Deadline: <strong>March 30, 2020</strong>
                                        </li>
                                        <li>
                                            Abstract Acceptance Notification: <strong>April 15, 2020</strong>
                                        </li>
                                        <li>
                                            Full Paper Submission Deadline: <strong> April 30, 2020</strong>
                                        </li>
                                        <li>
                                            Full Paper Acceptance and Review Comments Notification: <strong>May 10, 2020</strong>
                                        </li>
                                        {/* <li>
                                            Camera-Ready Final Full Paper Deadline for Inclusion in the Proceedings: <strong>May 15, 2020</strong>
                                        </li> */}
                                    </ul>
                                <p>
                                At the conference, all presenters will have 20-30 minutes for a PowerPoint presentation on their paper and must bring their presentation to the conference on a USB flash drive.
                                </p>

                                <p>
                                    All registration fees are to be paid into the following account; <br/>
                                    <strong>Bank: Access Bank <br/>
                                     Account Number: 069 023 1342 
                                     </strong>
                                </p>
                                <p>NB This conference is organised in partnership with the Nigerian Institute of Building (NIOB), Lagos State Chapter.
                                </p>
                                <p>Participant's certificate attracts NIOB CPD points 
                                </p>


                                <p><strong>Chief Host </strong><br/>
                                Professor Toyin Ogundipe FAS<br/> 
                                Vice Chancellor, <br/>
                                University of Lagos </p>

                                <p><strong>Host  </strong><br/>
                                Professor Mike Adebamowo FNIA <br/>
                                Dean, Faculty of Environmental Sciences, University of Lagos 
                                </p>
                                <p><strong>Co-Host</strong><br/> 
                                Professor Olumide Adenuga <br/>
                                Head, Department of Building,<br/>
                                Faculty of Environmental Sciences, <br/>
                                University of Lagos
                                </p>

                                
                                <p><strong>Keynote Speaker </strong><br/> 
                                Professor Deji Rufus Ogunsemi <br/>
                                Deputy Vice-Chancellor (Academic) <br/>
                                Federal University of Technology, <br/>
                                Akure, Ondo. </p>

                                <p><strong>Adviser, LOC </strong><br/> 
                                Professor Martin Dada <br/>
                                +234 802 353 8850 <br/>
                                </p>

                                <p><strong>Chairman, LOC </strong><br/> 
                                Dr. Olatunji Oladiran <br/>
                                +234 803 561 3467 
                                </p>

                                <p><strong>Secretary, LOC </strong><br/>
                                Dr. Julius Faremi <br/>
                                +234 803 7855322 
                                </p>


                            </div>
                           
                        </div>
                    </div>

                    </div>
                </div>
            </section>
      </React.Fragment>
    )
}

export default AboutPage;