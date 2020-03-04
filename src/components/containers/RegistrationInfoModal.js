import React from 'react';


const RegistrationInfo = () => {

    return (
        <div className="col">
        <div className="modal-dialog pop_evnt-rgt">
           <div className="modal-content">
              <div className="modal-header">
                 <h4 className="modal-title" style={{fontSize: 18}}> CONFERENCE REGISTRATION FEES</h4>
              </div>
              <div className="modal-body" style={{paddingLeft: '14%', paddingTop: 0}}>
                <p className='registration-fee'>
                <div><span style={{borderBottom: 'solid 1px #7c7c7de8'}}>Local Participants:</span></div>
                <span ><span className='registration-fee__value'>- Early Bird (Until 30th March): </span> ₦20,000</span>
                <div><span className='registration-fee__value'>- Regular: </span> ₦30,000 </div>
                <div><span className='registration-fee__value'>- Onsite: </span> ₦50,000</div>

                <div><span style={{borderBottom: 'solid 1px #7c7c7de8'}}>International Participants:</span></div>
                <div><span className='registration-fee__value'>- Early Bird (Until 30th March): </span>$100</div>
                <div><span className='registration-fee__value'>- Regular : </span>$150</div>
                <div><span className='registration-fee__value'>- Onsite : </span>$300</div>

                <div><span style={{borderBottom: 'solid 1px #7c7c7de8'}}> Student Registration</span></div>
                <div><span className='registration-fee__value'>Post Graduates :</span>₦10,000</div>
                <div><span className='registration-fee__value'>Undergraduates : </span>₦3,000</div>
                <div><span className='registration-fee__value'>Onsite : </span>₦20,000</div>

                <div><span style={{borderBottom: 'solid 1px #7c7c7de8'}}> Artisan</span></div>
                <div><span className='registration-fee__value'>- Early Bird (Until 30th March): </span> ₦15,000</div>
                <div><span className='registration-fee__value'>- Regular: </span> ₦20,000</div>
                <div><span className='registration-fee__value'>- Onsite: </span> ₦30,000</div>
                </p>
              </div>
           </div>
        </div>
        </div>
    )
}

export default RegistrationInfo;