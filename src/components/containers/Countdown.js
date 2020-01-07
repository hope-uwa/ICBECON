import React from 'react'
import DateCountdown from 'react-date-countdown-timer'


class Countdown extends React.Component {
    
    render() {
        return(
            <React.Fragment>
                <div className="container-fluid countdown-box" style={{'backgroundImage':'url("img/Countdown.jpg")'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                {/* <h4>Thursday, 25 December. 8:00PM</h4> */}
                                <h2><DateCountdown dateTo='2020-06-10 00:00:00 GMT+0300' locales={['y :','mo :','d :','h :','m :','s']} locales_plural={['y :','mo :','d :','h :','m :','s']} /></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}



export default Countdown