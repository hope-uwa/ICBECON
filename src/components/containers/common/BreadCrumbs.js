import React from 'react';
import breadCrumbImg from '../../../assets/slider03.jpg';


const BreadCrumb = (props) => {
    return (
        <section className="breadcrumbs" style={{backgroundImage: `url(${breadCrumbImg})`}}>
            <div className="overlay"></div>
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center">
                    <h2>{props.title}</h2>
                     <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><i className="fa fa-angle-double-right"></i></li>
                        <li><a className="active" href="about.html#">{props.title}</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
    )
}

export default BreadCrumb;