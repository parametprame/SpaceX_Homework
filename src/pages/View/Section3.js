import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import clip2 from '../../media/cut_launches.mp4'
import { Link } from "react-router-dom";
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    button: {
      margin: '0.1em',
      zIndex: 2,
      color: 'white',
      borderColor: 'white',
      marginTop: '2vh',
      height: '6vh'
    },
  });

const Section3 = () => {

    const classes = useStyles();

    AOS.init({
        duration: 2000
    })
    return(
        <React.Fragment>
             <section id='lau'>
                <div className="launches" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='container'>
                        <div className='row row-cols-md-2' >
                            <div className='col textabout'>
                                <p style={{ fontSize: '2em', fontWeight: 'bold' }} data-aos="fade-up">Launches</p>
                                <h6 data-aos="fade-up">Collect data for testing or launching rockets. Consisting of the name of the mission, the name of the rocket used in that mission And various details</h6>
                                <Link to='Launches'>
                                    <Button variant="outlined"  className={classes.button} size="large"  data-aos="fade-up">
                                        <i className="fas fa-rocket">  See more</i>
                                    </Button>
                                </Link>
                            </div>
                            <div className='col' data-aos="fade-up">
                                <video id="background-video" loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video >
                                    <source src={clip2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Section3