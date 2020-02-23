import React from 'react';


const RegistrationInfo = () => {

    return (
        <div className="col">
        <div className="modal-dialog pop_evnt-rgt">
           <div className="modal-content">
              <div className="modal-header">
                 <h4 className="modal-title" style={{fontSize: 20}}> CONFERENCE REGISTRATION FEES</h4>
              </div>
              <div className="modal-body" style={{paddingTop: 0}}>
                <p className='registration-fee'>
                <span style={{borderBottom: 'solid 1px #7c7c7de8'}}>Local Participants :</span><br/>
                <span className='registration-fee__value'>- Early Bird (Until 30th March): </span> ₦20,000<br/>
                <span className='registration-fee__value'>- Regular/Last Bird : </span> ₦30,000 <br/>

                 <span style={{borderBottom: 'solid 1px #7c7c7de8'}}>International Participants :</span><br/>
                <span className='registration-fee__value'>- Early Bird (Until 30th March): </span>$100<br/>
                <span className='registration-fee__value'>- Regular/Last Bird : </span>$150<br/>

                <span style={{borderBottom: 'solid 1px #7c7c7de8'}}> Student Registration</span><br/>
                 <span className='registration-fee__value'>Post Graduates :</span>₦10,000<br/>
                <span className='registration-fee__value'>Undergraduates : </span>₦3,000<br/>
                </p>
              </div>
           </div>
        </div>
        </div>
    )
}

export default RegistrationInfo;