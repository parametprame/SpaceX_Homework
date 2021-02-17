import React from 'react'
import clip from '../../media/cut_rocket.mp4'
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Section4 = () => {
    return(
        <section id='home'>
                <div className="view">
                    <video id="background-video" loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video >
                        <source src={clip} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay" >
                        <p >Rockets</p>
                        <h6> Collect all of SpaceX's rockets and their descriptions of each rocket. </h6>
                        <h6>Including information on the usage of that rocket</h6>
                        <Link type="button" className="btn btn-outline-light waves-effect my-2 btn-lg" to='/Rocket'><i className="fas fa-rocket">  See more</i></Link>
                    </div>
                </div>
            </section>
    )
}
export default Section4