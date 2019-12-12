import React from 'react'



class Sponsors extends React.Component {

    render () {
        return(
            <React.Fragment>


                
                <div className="modal fade" id="become-partner" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>



                <div className="container-fluid sponsors" id="sponsors" style={{backgroundImage:"url(./img/about_bg.jpg"}}>
                    <div className="container">

                    <div className="row text-center">

                        <h2>Our Sponsors &amp; Partners</h2>

                    </div>



                        <div className="row sponsors-area text-center">

                            <div className="col-md-3 sponsors-item">
                                <img src="./img/brand/brand1.png" alt="" />
                            </div>

                            <div className="col-md-3 sponsors-item">
                                <img src="./img/brand/brand2.png" alt="" />
                            </div>

                            <div className="col-md-3 sponsors-item">
                                <img src="./img/brand/brand3.png" alt="" />
                            </div>

                            <div className="col-md-3 sponsors-item">
                                <img src="./img/brand/brand4.png" alt="" />
                            </div>

                            <div className="col-md-3 sponsors-item">
                                <img src="./img/brand/brand5.png" alt="" />
                            </div>

                            <div className="col-md-3 sponsors-item">
                                <img src="./img/brand/brand6.png" alt="" />
                            </div>

                        </div>

                        <div className="row text-center">
                            <div className="col-md-12">
                                <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#become-partner">Become a Sponsor/Partner</button>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }

}



export default Sponsors