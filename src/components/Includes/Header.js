import React from 'react'



const Header = () => {


    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top main-header">
                <a className="navbar-brand" href="/">
                    <img src="./img/logo.png" alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto"></ul>

                    <ul className="navbar-nav my-2 my-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#speakers">Speakers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sponsors">Sponsors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/publications">Publications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        
                        <li className="nav-item">
                            <button className="btn btn-danger">Register</button>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </React.Fragment>
    )

}


export default Header