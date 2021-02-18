import React from 'react'
import clip from '../../media/cut_rocket.mp4'
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Section4 = () => {
    return(
        <section id='home'>
                <div className="view" style={{position: 'relative'}}>
                    <video id="background-video" loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video >
                        <source src={clip} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay" style={{fontSize: '2em', fontWeight: 'bold'}}>
                        <p >Rockets</p>
                        <h6> Collect all of SpaceX's rockets and their descriptions of each rocket. </h6>
                        <h6>Including information on the usage of that rocket</h6>
                        <Link type="button" className="btn btn-outline-light waves-effect my-2 btn-lg" to='/Rockets'><FontAwesomeIcon icon={faRocket} />{' '} See more</Link>
                    </div>
                </div>
            </section>
    )
}
export default Section4