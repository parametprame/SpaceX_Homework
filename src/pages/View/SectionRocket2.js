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

const SectionRocket2 = () => {

    const classes = useStyles();

    AOS.init({
        duration: 2000
    })
    return (
        <React.Fragment>
            <section id='lau'>
                <div className="launches" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='container'>
                        <div className='row row-cols-1  row-cols-md-2' data-aos="fade-up">
                            <div className='col' >
                                <img src="https:i.ytimg.com/vi/oFQQjthZfA4/maxresdefault.jpg" alt="Avatar" className="imageTop" class="img-fluid rounded"></img>
                            </div>
                            <div className='col textabout'>
                                <p style={{ fontSize: '2em', fontWeight: 'bold' }} >FALCON  1</p>
                                <h6 >The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.</h6>
                                <Link type="button" className="btn btn-outline-light waves-effect my-2 btn-lg" to='/RocketDetail'   ><FontAwesomeIcon icon={faRocket} />{' '}See more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='lau'>
                <div className="launches" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='container'>
                        <div className='row row-cols-1  row-cols-md-2' data-aos="fade-up">
                            <div className='col' >
                                <img src="https://cnet3.cbsistatic.com/img/hw-r4jFpdqaFotM6vYXIc0IQ8jQ=/1200x675/2020/07/13/0be85427-bec6-4d86-b94a-fd6df0f463ae/49956396622-84891c5192-3k.jpg" alt="Avatar" className="imageTop" class="img-fluid rounded"></img>
                            </div>
                            <div className='col textabout'>
                                <p style={{ fontSize: '2em', fontWeight: 'bold' }} >FALCON 9</p>
                                <h6 >Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.</h6>
                                <Link type="button" className="btn btn-outline-light waves-effect my-2 btn-lg" to='/Rocket'   ><FontAwesomeIcon icon={faRocket} />{' '}See more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default SectionRocket2