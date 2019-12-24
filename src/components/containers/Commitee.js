import React from 'react'
import User from '../../assets/default-user-image.png';

const committee = [
    { name: 'Prof. Matin O. Dada', position: 'Member/Adviser'},
    { name: 'Dr. Olatunji J. Oladiran', position: 'Conference Chairman'},
    { name: 'Dr. Julius O. Faremi', position: 'Conference Secretary' }, 
    { name: 'Dr Oluranti O. Ajayi', position: ' Committee Member' },
    { name: 'Dr Kudirat I. Zakarriyah',	position: 'Committee Member'},
    { name: 'Dr Adegboyega S. Sotunbo', position: 'Committee Member'},
    { name: 'Mr. Olutayo A. Akinkunmi', position: 'Committee Member'},
    { name: 'Mr. Tunde A. Folorunso', position: 'Committee Member'},
    { name: 'Mr Aderemi M. Aderogba', position: 'Committee Member'},
    { name: 'Mr Ganiu. T. Aregbesola', position: 'Committee Member'},
    { name: 'Mr Dele Simeon', position: 'Committee Member'},
    { name: 'Mr Tijani', position: 'Committee Member'},
]
const technicalCommittee = [
    { name: 'Prof Koleola T. Odusami', institution:	'University of Lagos, Nigeria' },
    { name: 'Prof Godwin I. Idoro', institution:	'University of Lagos, Nigeria' },
    { name : 'Prof Olumide A. Adenuga', institution:	'University of Lagos, Nigeria' },
    { name: 'Prof O. Sunday Oyediran', institution:	'University of Lagos, Nigeria' },
    { name: 'Prof Matin O. Dada', institution:	'University of Lagos, Nigeria' },
    { name: 'Prof Olabode E. Ogunsanmi'	, institution:	'University of Lagos, Nigeria' },
    { name: 'Dr. John Ameh'	, institution:	'University of Lagos, Nigeria' },
    { name: 'Dr Olalekan S. Oshodi', institution: 'Anglia Ruskin University, Chelmsford, UK'},
    { name: 'Dr Majeed Oladokun.', institution: '' }
]        


const Committee = () => {

        return(
            <React.Fragment>


                <div className="container-fluid speakers" id="committee">
                    <div className="container">
                        <div className="row heading-title text-center">
                            <h2>Committee</h2>
                        </div>

                        <div className="row text-center speakers-area">

                            {/* speakers item */}
                           { committee.map((member, index)=> (
                               <div key={`${index}`} className="col-md-3 speakers-item">
                                <div className="col-12 speakers-img" style={{backgroundImage:`url(${User})`}}>
                                   
                                </div>
                                <div className="col-12 speakers-info">
                                    <h6>{member.name}</h6>
                                    <p>{member.position}</p>
                                </div>
                                </div>
                           )) }

                            { technicalCommittee.map((member, index)=> (
                               <div key={`${member.name.split(' ')[0]}-${index}`} className="col-md-3 speakers-item">
                                <div className="col-12 speakers-img" style={{backgroundImage:`url(${User})`}}>
                                    
                                </div>
                                <div className="col-12 speakers-info">
                                    <h6>{member.name}</h6>
                                    <p>Technical Committee Member</p>
                                </div>
                                </div>
                           )) }
                            
                            

                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }




export default Committee