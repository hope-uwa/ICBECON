import React from 'react'



import Carousel from '../containers/Carousel'
import Banner from './HomeBanner'
import Countdown from '../containers/Countdown'
import About from '../containers/About'
import Stats from '../containers/Stats'
import Speakers from '../containers/Speakers'
import Sponsors from '../containers/Sponsors'
import Schedule from '../containers/Schedule'
import Committee from '../containers/Commitee'




class Home extends React.Component {

    

    render () {
        const { history } = this.props
        return (
            <React.Fragment>
                <Banner/>
                <About history={history} />
                {/* <Carousel /> */}
                <Countdown />
                <Speakers />
                <Stats />
                <Committee />
                <Sponsors />
                <Schedule/>
            </React.Fragment>
        )
    }


}



export default Home