import React from 'react'
import paper from '../../assets/paper.png'
//import { checkPropTypes } from 'prop-types'



const Abstracts = (props) => {
    return(
        <React.Fragment>
            <div className="container-fluid about" id="about" style={{background:'#ff00000a'}}>
               
                    <div className="row abstract">
                        <div className="col-md-6 offset-md-1 ">
                        <h2>Abstracts Submission</h2>
                            <p>
                                Authors are invited to submit 200-300-word abstracts to the International Construction 
                                and Built Environment Conference (ICBECONF 2020), with the theme Innovation, Sustainability 
                                and Transformation in the Built Environment
                                Authors should indicate the topic area from technical paper .session topics appropriate for their paper.

                            </p>

                            <p> <a style={{color: '#be2b65'}} onClick={()=> props.history.push('/abstract-submission')} href='#abstract'>Click Here to submit Abstract</a></p>
                        </div>

                        <div className="col-md-4 offset-md-1 abstract-image">
                            <img style={{width: '80%'}} src={paper}/>
                        </div>

                    </div>
            </div>
        </React.Fragment>
    )
}


export default Abstracts