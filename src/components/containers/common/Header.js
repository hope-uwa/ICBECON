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
                       
                        {/* <li className="nav-item">
                            <a onClick={()=> history.push('/')} className="nav-link" >Publications</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> history.push('/')} className="nav-link" >News</a>
                        </li> */}
                        <li className="nav-item">
                            <a onClick={()=> history.push('/')} className="nav-link">Contact</a>
                        </li>
                       
                        <li className="nav-item show-large">
                            <div class="dropdown">
                                <button class="btn btn-secondary btn-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Submissions
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a onClick={()=> history.push('/abstract-submission')} className="nav-link">Abstract Submission</a>
                                    <a class="dropdown-item"  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScbnilRmiP0dkYMdrGBK3on8aSgw3bPlxJg0gkAyhjrfvwdAA/viewform?usp=pp_url">Full Paper Submission</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item show-large">
                            <button class="btn btn-outline-danger" type="button">
                                <a class='register' style={{color: 'inherit'}}  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf6MxvIPZlt58z0X9I7pf62ppoUBpGh82VG_vDhmlBNvGfKWQ/viewform?usp=pp_url">Registration</a>
                            </button>
                        </li>
                        <li className="nav-item hide-large">
                            <a onClick={()=> history.push('/abstract-submission')} className="nav-link">Abstract Submission</a>
                        </li>
                        <li className="nav-item hide-large">
                            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScbnilRmiP0dkYMdrGBK3on8aSgw3bPlxJg0gkAyhjrfvwdAA/viewform?usp=pp_url" className="nav-link">Full Paper Submission</a>
                        </li>
                        <li className="nav-item hide-large">
                            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf6MxvIPZlt58z0X9I7pf62ppoUBpGh82VG_vDhmlBNvGfKWQ/viewform?usp=pp_url" className="nav-link">Registration</a>
                        </li>
                        

                    </ul>
                    
                </div>
            </nav>
        </React.Fragment>
    )

}


export default withRouter(Header)