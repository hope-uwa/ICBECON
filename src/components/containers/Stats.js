import React from 'react'


class Stats extends React.Component {
    
    render() {
        return(
            <React.Fragment>
                <div className="container-fluid countdown-box" style={{'backgroundImage':'url("img/Countdown.jpg")'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 offset-md-3 text-center">
                                <h2>1</h2>
                                <h4>Speaker</h4>
                            </div>

                            <div className="col-md-2 text-center">
                                <h2>2</h2>
                                <h4>Days</h4>
                            </div>

                            <div className="col-md-2 text-center">
                                <h2>1</h2>
                                <h4>Auditorium</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}



export default Stats