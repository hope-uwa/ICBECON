import React, { useState } from 'react';


const Schedule = (props) => {
    const [ day, setDay ] = useState(1)
    return(
        <section >
         <div className="container" className="schedule">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-title text-center">
                     <h2>Conference Schedule</h2>
                     {/* <p>There are many variations of passages of Lorem Ipsum available but the at majority
                        have suffered alteration in some dummy.
                     </p> */}
                     {/* <p>
                        <span className="white_btn mrg-15" ><i className="fa fa-calendar-check-o"></i> Add to My Calender</span>
                        <span className="white_btn mrg-15" href="index_03.html#"><i className="fa fa-file-pdf-o"></i> DOWNLOAD SCHEDULES</span>
                     </p> */}
                  </div>
               </div>
            </div>
            <div className="row marg_tp">
               <div className="col-md-12">
                  <div className="tab-bar">
                     <ul className="nav nav-tabs">
                        <li className="nav-item">
                           <span onClick={()=>setDay(1)} className="nav-link active" data-toggle="tab" href="index_03.html#day1">DAY 01<br/><span>20/05/2020</span></span>
                        </li>
                        <li className="nav-item">
                           <span onClick={()=>setDay(2)} className="nav-link" data-toggle="tab" href="index_03.html#day2">DAY 02<br/><span>21/05/2020</span></span>
                        </li>
                     </ul>
                     <div className="tab-content">
                       {day === 1 && <div className=" container" >
                           <div className="col-md-12 mrgn_tab">
                              <div className="tab_rw">
                                 <div className="schedule-desc">
                                    <h3>John Doe - <span>(Topic: XXX)</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Lorem ipsum dolor  amet, consectetur adipiscing, sed eiusmod tempor. Vestibulum vel accumsan arcu. Duis nisl purus. Lorem ipsum dolor  amet, consectetur adipiscing.</p>
                                    <p><i className="fa fa-home"></i>  Main Auditorium    <span> | </span>    <i className="fa fa-clock-o"></i>  8:00 to 8:45 am      </p>
                                 </div>
                              </div>
                              <div className="tab_rw">
                                 <div className="schedule-desc">
                                    <h3>John Doe - <span>(Topic: YYY)</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Lorem ipsum dolor  amet, consectetur adipiscing, sed eiusmod tempor. Vestibulum vel accumsan arcu. Duis nisl purus. Lorem ipsum dolor  amet, consectetur adipiscing.</p>
                                    <p><i className="fa fa-home"></i> Main Auditorium    <span> | </span>    <i className="fa fa-clock-o"></i>  8:00 to 8:45 am      </p>
                                 </div>
                              </div>
                              <div className="tab_rw">
                                 <div className="schedule-desc">
                                    <h3>John Doe - <span>(Topic: ZZZ)</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Lorem ipsum dolor  amet, consectetur adipiscing, sed eiusmod tempor. Vestibulum vel accumsan arcu. Duis nisl purus. Lorem ipsum dolor  amet, consectetur adipiscing.</p>
                                    <p><i className="fa fa-home"></i>  Main Auditorium    <span> | </span>    <i className="fa fa-clock-o"></i>  8:00 to 8:45 am      </p>
                                 </div>
                              </div>
                           </div>
                        </div>}
                       { day === 2 &&  <div className="container ">
                           <div className="col-md-12 mrgn_tab">
                              <div className="tab_rw">
                                 <div className="schedule-desc">
                                    <h3>Jane Doe - <span>(Topic: XXX)</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Lorem ipsum dolor  amet, consectetur adipiscing, sed eiusmod tempor. Vestibulum vel accumsan arcu. Duis nisl purus. Lorem ipsum dolor  amet, consectetur adipiscing.</p>
                                    <p><i className="fa fa-home"></i> Main Auditorium    <span> | </span>    <i className="fa fa-clock-o"></i>  8:00 to 8:45 am   </p>
                                 </div>
                              </div>
                              <div className="tab_rw">
                                 <div className="schedule-desc">
                                    <h3>Jane Doe - <span>(Topic: YYY)</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Lorem ipsum dolor  amet, consectetur adipiscing, sed eiusmod tempor. Vestibulum vel accumsan arcu. Duis nisl purus. Lorem ipsum dolor  amet, consectetur adipiscing.</p>
                                    <p><i className="fa fa-home"></i> Main Auditorium    <span> | </span>    <i className="fa fa-clock-o"></i>  8:00 to 8:45 am    </p>
                                 </div>
                              </div>
                              <div className="tab_rw">
                                 <div className="schedule-desc">
                                    <h3>Jane Doe - <span>(Topic: ZZZ)</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Lorem ipsum dolor  amet, consectetur adipiscing, sed eiusmod tempor. Vestibulum vel accumsan arcu. Duis nisl purus. Lorem ipsum dolor  amet, consectetur adipiscing.</p>
                                    <p><i className="fa fa-home"></i> Main Auditorium    <span> | </span>    <i className="fa fa-clock-o"></i>  8:00 to 8:45 am      </p>
                                 </div>
                              </div>
                           </div>
                        </div>}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )
}

export default Schedule;