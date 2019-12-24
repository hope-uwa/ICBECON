import React from 'react'


class Register extends React.Component {
    
    render() {
        return(
        <div className="col">
            <div className="modal-dialog pop_evnt-rgt">
               {/* <!-- Modal content--> */}
               <div className="modal-content">
                  <div className="modal-header">
                     <h4 className="modal-title">Conference Registration</h4>
                  </div>
                  <div className="modal-body">
                     <form>
                        <div className="row">
                           <div className="col">
                              <div className="form-group ">
                                 <input type="text" className="form-control input-field" id="Rgt-name" placeholder="Your Name" />
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col">
                              <div className="form-group ">
                                 <input type="text" className="form-control input-field" id="Rgt-email" placeholder="Your Email" />
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col">
                              <div className="form-group ">
                                 <input type="text" className="form-control input-field" id="Rgt-phone" placeholder="Your Phone" />
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col">
                              <div className="form-group ">
                                 <input type="text" className="form-control input-field" id="Rgt-phone" placeholder="Institution" />
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="contact-frm-btn">
                              <button type="submit" className="btn btn-outline-danger">SUBMIT</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
        </div>
        )
    }

}



export default Register