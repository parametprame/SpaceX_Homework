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

const SectionDetail2 = () => {

    const classes = useStyles();

    AOS.init({
        duration: 2000
    })
    return (
        <React.Fragment>
            <section id='lau'>
                <div className="launches" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='container' data-aos="fade-up">
                        <div className='row row-cols-1  row-cols-md-2' >
                            <div className='col textabout' data-aos="fade-up">
                                <p style={{ fontSize: '1em', fontWeight: 'bold' }} >FALCON  1</p>
                                <p style={{ fontSize: '2em', fontWeight: 'bold' }} >OVERVIEW</p>
                                <table class="table" width="20%">
                                    <tbody style={{ fontSize: '1em', fontWeight: 'normal', color: 'ActiveBorder' }}  >
                                        <tr style={{ border: '2%' }}>
                                            <th align='left'>HEIGHT</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>70 m/ 229.6 ft </td>
                                        </tr>
                                        <tr>
                                            <th align='left'>DIAMETER</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>12.2 m / 39.9 ft </td>
                                        </tr>
                                        <tr>
                                            <th align='left'>MASS</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>1,420,788 kg / 3,125,735 lb</td>
                                        </tr>
                                        <tr>
                                            <th align='left'>PAYLOAD TO LEO</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>63,800 kg / 140,660 lb </td>
                                        </tr>
                                        <tr>
                                            <th align='left'>PAYLOAD TO GTO</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>26,700 kg / 58,860 lb </td>
                                        </tr>
                                        <tr>
                                            <th align='left'>PAYLOAD TO MARS</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>16,800 kg / 37,040 lb</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <p style={{ fontSize: '1em', fontWeight: 'bold' }} >FALCON  1</p>
                            <p style={{ fontSize: '2em', fontWeight: 'bold' }} >OVERVIEW</p>
                            <p style={{ fontSize: '1em', fontWeight: 'bold' }} >The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.</p> */}
                            </div>
                            <div className='col textabout' data-aos="fade-up">
                                <p style={{ fontSize: '1em', fontWeight: 'bold' }} >FALCON  1</p>
                                <p style={{ fontSize: '2em', fontWeight: 'bold' }} >OVERVIEW</p>
                                <table class="table" width="20%">
                                    <tbody style={{ fontSize: '1em', fontWeight: 'normal', color: 'ActiveBorder' }}  >
                                        <tr style={{ border: '2%' }}>
                                            <th align='left'>HEIGHT</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>70 m/ 229.6 ft </td>
                                        </tr>
                                        <tr>
                                            <th align='left'>DIAMETER</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>12.2 m / 39.9 ft </td>
                                        </tr>
                                        <tr>
                                            <th align='left'>MASS</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>1,420,788 kg / 3,125,735 lb</td>
                                        </tr>
                                        <tr>
                                            <th align='left'>PAYLOAD TO LEO</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>63,800 kg / 140,660 lb </td>
                                        </tr>
                                        <tr>
                                            <th align='left'>PAYLOAD TO GTO</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>26,700 kg / 58,860 lb </td>
                                        </tr>
                                        <tr>
                                            <th align='left'>PAYLOAD TO MARS</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>16,800 kg / 37,040 lb</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default SectionDetail2