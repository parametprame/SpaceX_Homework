import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import clip2 from '../../media/cut_launches.mp4'
import { Link } from "react-router-dom";
import { Button, makeStyles } from '@material-ui/core'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const useStyles = makeStyles({
    button: {
        margin: '0.1em',
        zIndex: 2,
        color: 'orange',
        borderColor: 'orange',
        marginTop: '2vh',
        height: '6vh'
    },
});

const SectionRocket3 = () => {
    const classes = useStyles();
    AOS.init({
        duration: 2000
    })
    return (
        <React.Fragment>
            <section id='lau'>
                <div className="launches" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='container' >
                        <div className='row row-cols-1  row-cols-md-2' data-aos="fade-up">
                            <div className='col' >
                                <img src="https://www.teslarati.com/wp-content/uploads/2019/04/Falcon-Heavy-Flight-2-liftoff-Pauline-Acalin-6-2-c.jpg" alt="Avatar" className="imageTop" class="img-fluid rounded"></img>
                            </div>
                            <div className='col textabout'>
                                <p style={{ fontSize: '2em', fontWeight: 'bold' }} >FALCON HEAVY</p>
                                <h6 >With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.</h6>
                                <Link type="button" className="btn btn-outline-light waves-effect my-2 btn-lg" to='/Rocket'   ><FontAwesomeIcon icon={faRocket} />{' '}See more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='lau'>
                <div className="launches" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='container' >
                        <div className='row row-cols-1  row-cols-md-2' style={{ marginTop: "5%" }} data-aos="fade-up">
                            <div className='col' >
                                <img src="https://cdn.arstechnica.net/wp-content/uploads/2020/12/Starship-SN8-Dec-9-2020-0927.jpg" alt="Avatar" className="imageTop" class="img-fluid rounded"></img>
                            </div>
                            <div className='col textabout'>
                                <p style={{ fontSize: '2em', fontWeight: 'bold' }} >STAR SHIP</p>
                                <h6 >Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.</h6>
                                <Link type="button" className="btn btn-outline-light waves-effect my-2 btn-lg" to='/Rocket'   ><FontAwesomeIcon icon={faRocket} />{' '}See more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default SectionRocket3