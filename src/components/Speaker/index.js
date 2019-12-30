import React, {useEffect, useState} from 'react';
import BreadCrumbs from '../containers/common/BreadCrumbs';
import keySpeaker from '../../assets/key-speaker.jpeg'

const SpeakerView = () => {
    const [display, setdisplay] = useState(false)
    let buttonText = display ? 'Collapse Profile' : 'View Profile'
    return (
    <div className="">
        <div className="card speaker-card">
            <div className="card-header speaker-card__header">
                <div className="row" style={{ alignItems: 'center'}}>
                    <div className="col-md-3">
                        <div className="speaker_img">
                            <img src={keySpeaker} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h3>Professor Deji Rufus Ogunsemi <span>(Key Note Speaker)</span></h3>
                        <h5>DVC, Academics; Federal University of Technology, Akure (FUTA),<br/> Ondo State, Nigeria</h5>
                        <span className="speaker-card__button" onClick={() => setdisplay(!display)} >
                       {buttonText}
                        </span>
                    </div>
                </div>
            </div>

            <div>
           { display && <div className="card-body">
              <p>
                Professor Deji Rufus Ogunsemi was born into the family of Late Pa David Ogunsemi and Madam Victoria Ogunsemi of Afao Quarters in Ikere-Ekiti on 16th March, 1965.
              </p>
              <p>
                He attended the famous African Church Comprehensive High School, Ikere-Ekiti from 1977 to 1982. Professor Ogunsemi while in the high School started demonstrating outstanding brilliance which has snowballed into a widely acclaimed erudition today. He represented the School in many quiz competitions.
              </p>
              <p>
                In 1983, Prof. Ogunsemi gained admission to the prestigious University of Ife (now Obafemi Awolowo University) Ile-Ife where he bagged his B.Sc (Hons.) degree in Building in 1988. He later enrolled in the same University for the pioneering Masters degree in Quantity Surveying thus becoming one of the first two M.Sc. Quantity Surveying graduates in a Nigerian University in 1997.
              </p>
              <p>
                In his quest for academic excellence, Prof. Ogunsemi bagged his Doctor of Philosophy degree in Quantity Surveying from the Federal University of Technology, Akure (FUTA) with full academic support from his alma mater, Obafemi Awolowo University, Ile-Ife thus writing his name in gold and engraving it on marble as the first to bag a doctorate degree in Quantity Surveying from a Nigerian University.
              </p>
              <p>
                Before reaching the pinnacle of his academic career, Prof. Ogunsemi joined the services of the then Ondo State Polytechnic (now Rufus Giwa Polytechnic, Owo) in 1989 as an Assistant Lecturer. His thirst for academic and professional fulfilment brought him to the Federal University of Technology, Akure where he took up appointment as Assistant Lecturer in the Department of Quantity Surveying in 1992 believing that he would soon make it to the top and by divine providence, he rose through the ranks within a short space of time to become a Professor in the same Department in 2006, making him the second Professor of Quantity Surveying in any Nigerian university at that time.
              </p>
              <p>
                Prof. Ogunsemi’s academic pedigree can best be captured from many research grants he had won and scholarly publications too numerous to chronicle. He has well over eighty (80) publications to his credit in reputable local and international Journals and Conference proceedings. He had attended several conferences and workshops within and outside the country where he presented quality papers. He co-authored a book on Fundamental of Building Design, Construction and Materials and had served as Reviewer for many reputable local and international journals.
              </p>
              <p>
                 Prof. Ogunsemi had served as External Examiner to many Universities, Polytechnics and Professional bodies like the Nigerian Institute of Quantity Surveyors and the Nigerian Institute of Building. He had equally supervised a number of Ph.D and Masters theses. It is of note that this gentleman had mentored many academics and professionals who have made great landmarks in their chosen careers.
              </p>
              <p>
                Prof. Ogunsemi has not limited himself to the walls of Academic, but he has made tremendous impacts in the Professional world. He is a Fellow, Nigerian Institute of Quantity Surveyors (FNIQS) and a Registered Quantity Surveyor (RQS). He is also a Corporate Member, Nigerian Institute of Building (MNIOB) and a Registered Builder (R.Bldr).
              </p>
              <p>
                Prof. Ogunsemi’s intellectual stature can further be measured by the number of awards he had won. At the University education level, he won the Faculty prize for the Best Graduating Student in the Faculty of Environmental Design and Management, Obafemi Awolowo University, Ile-Ife in 1988; K. A. Wahab Foundations Dean’s prize for the most consistent student academically from Part III to IV in the same Faculty in 1988; Arc. (Chief) Balogun and F. Okikoya’s Prizes for the Best Final year Building Student in 1988.
              </p>
              <p>
                As a Lecturer in FUTA, Prof. Ogunsemi had distinguished himself as a priceless asset not only to his School but to the entire University. He won the Best Head of Department of the Year 2006 Award thus becoming the first person to win the award in the academic unit category of FUTA since the award was instituted. He was also adjudged the best Dean of the year 2011 in FUTA during his first term as Dean in the School.
              </p>
              <p>
                 He also won the Distinguished Alumnus awards of the Faculty of Environmental Design and Management and Department of Quantity Surveying both of Obafemi Awolowo University, Ile-Ife in 2011 and 2012 respectively.
              </p>
              <p>
                Prof. Ogunsemi had served in different capacities both within and outside FUTA. He nurtured the Department of Quantity Surveying in FUTA from inception to maturity having served as Co-ordinator and Acting Head of Department for over thirteen years. He had also served as Dean of School of Environmental Technology for two terms and was Chairman, Committee of Deans before the expiration of his second term. He was an elected member representing Senate on the University Governing Council(2013-2017). He is the current Chairman of the Board, FUTA Staff Secondary School. He had also served in different capacities on a number of NBTE, NUC, NIQS and NIOB Accreditation Teams and Committees. He was a Member, Board of Directors of Quantity Surveyors Academy(2015-2018) and currently the Chief Editor of the Journal of the Nigerian Institute of Quantity Surveyors. He is also a Board member of the Council of Registered Builders of Nigeria(CORBON) and Chairman, Registration &Training Committee of the Council.
              </p>
              <p>
                Prof. Ogunsemi was recently appointed as the Deputy Vice-Chancellor(Academic) of the Federal University of Technology, Akure.
              </p>
              <p>
                He is happily married and the union is blessed with children
              </p>
            </div>}
            </div>
        </div>
        

    </div>)
}

const SpeakerPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);


    return(
      <React.Fragment>
            <BreadCrumbs title={'Speakers'} />
            <section id="schedule" className="schedule">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-title text-center">
                     <h2>Awesome Speakers</h2>
                  </div>
               </div>
            </div>
            
           <SpeakerView />
           
         </div>
      </section>
      </React.Fragment>
    )
}

export default SpeakerPage;