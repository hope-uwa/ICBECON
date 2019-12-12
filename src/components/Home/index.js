import React from 'react'



import Carousel from './Carousel'
import Header from './../Includes/Header'
import Countdown from './Countdown'
import About from './About'
import Stats from './Stats'
import Speakers from './Speakers'
import Sponsors from './Sponsors'




class Home extends React.Component {


    render () {
        return (
            <React.Fragment>
                <Header />
                <Carousel />
                <Countdown />
                <About />
                <Stats />
                <Speakers />
                <Sponsors />
            </React.Fragment>
        )
    }


}



export default Home