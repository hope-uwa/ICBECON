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
const AboutPage = () => {

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
                           
                            
                            <h2>Aim</h2>
                            <p>The Conference & Expo is aimed at bringing together hundreds of building industry professionals, researchers and experts from academia to explore strategies aimed at Optimized solutions for both the present and the future. </p>

                            <h2>Participants</h2>
                            <p>Construction industry professionals (Architects, Builders, Estate Surveyors, QS) and 
                                experts from academia, consulting and construction firms, construction materials manufacturers 
                                and merchants, Developers, Government Ministries and Agencies are cordially invited to submit 
                                abstracts by June 15, 2019 on all aspects of built environment innovations, sustainability and 
                                transformation, including but not limited to the following topics: </p>
                            <ul>
                            {
                                topics.map((topic, index) => 
                                    <li key={index}> {topic}</li> 
                                )}
                            </ul>
                            
                            <p>Authors of accepted abstracts will submit their full papers for review and comments 
                                by the International Scientific Committee for inclusion in the Conference Proceedings. 
                                The Conference Proceedings will be an edited document and will require the authors of 
                                the papers to transfer copyright to the LOC for its publication with an ISBN number. 
                                In addition, selected papers of high quality would be further reviewed for acceptance 
                                and possible publication in a book of readings.</p>

                            <p> By June 15, 2019, submit abstracts through EasyChair conference
                                management software:</p>
                                <a href='https://easychair.org/conferences/?conf=2020building'> EASY CHAIR ABSTRACT SUBMISSION </a>
                            <p>For any submission questions, authors may contact Conference Secretariat:

                                abc@unilag.edu.ng, <br/>
                                +234 80500000, <br/> 
                                +234 80950000, <br/>
                                Department of Building, <br/>
                                Faculty of Environmental Sciences, <br/>
                                University of Lagos, <br/>
                                www.abcd.edu.ng
                            </p>

                            <h2>Submission Dates</h2>
                            <p>Authors are invited to submit 200-300-word abstracts and indicate the topic area from technical paper session topics appropriate for their paper.</p>
                            <ul>
                                <li>
                                    Abstract Submission Deadline: <strong>July 15, 2019</strong>J
                                </li>
                                <li>
                                    Full Paper Submission Deadline: <strong> October 28, 2019</strong>
                                </li>
                                <li>
                                    Full Paper Acceptance and Review Comments Notification: <strong>December 7, 2019</strong>
                                </li>
                                <li>
                                    Camera-Ready Final Full Paper Deadline for Inclusion in the Proceedings: <strong>February 27, 2020</strong>
                                </li>
                            </ul>
                           <p>
                           At the conference, all presenters will have 20-30 minutes for a PowerPoint presentation on their paper and must bring their presentation to the conference on a USB flash drive.
                           </p>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
      </React.Fragment>
    )
}

export default AboutPage;