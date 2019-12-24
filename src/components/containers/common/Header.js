import React from 'react'
import { withRouter } from 'react-router-dom';


const Header = (props) => {
    const { history } = props;

    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top main-header">
                <a className="navbar-brand" href="/">
                    <img src="./img/logo.png" alt="" onClick={()=> history.push('/')} />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto"></ul>

                    <ul className="navbar-nav my-2 my-lg-0">
                        <li className="nav-item">
                            <span className="nav-link" onClick={()=> history.push('/')}>Home</span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=> history.push('about-conference')} className="nav-link" href="#about">About</span>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> history.push('speakers')} className="nav-link">Speakers</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> history.push('/')} className="nav-link" href="#conference-sponsors">Sponsors</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> history.push('/')} className="nav-link" href="#committee">Committee</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> history.push('/')} className="nav-link" >Publications</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> history.push('/')} className="nav-link" >News</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> history.push('/')} className="nav-link">Contact</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </React.Fragment>
    )

}


export default withRouter(Header)