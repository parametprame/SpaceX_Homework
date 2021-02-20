import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, makeStyles } from '@material-ui/core'


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

const SectionDetail2 = (props) => {

    const classes = useStyles();

    AOS.init({
        duration: 2000
    })
    return (
        <section id='det'>
            <div className="detail" style={{ display: 'flex' }}>
                <div className='container' style={{ marginTop: '10%' }}>
                    <p className='textdet'>{props.data.rocket_name}</p>
                    <div class="container">
                        <div class="row"  >
                        <div class="col-md-6">
                            <table class="table" width="100%">
                            <tbody style={{ fontSize: '1em', fontWeight: 'normal', color: 'ActiveBorder' }}  >
                                <tr style={{ border: '2%' }}>
                                    <th align='left'>HEIGHT</th>
                                    <td></td>
                                    <td></td>
                                    <td align='right'>{props.data.height.meters} m/ {props.data.height.feet} ft </td>
                                </tr>
                                <tr>
                                    <th align='left'>DIAMETER</th>
                                    <td></td>
                                    <td></td>
                                    <td align='right'>{props.data.diameter.meters} m / {props.data.diameter.meters} ft </td>
                                </tr>
                                {props.data.payload_weights.map((data) => {
                                    return(
                                        <tr>
                                            <th align='left'>{data.id}</th>
                                            <td></td>
                                            <td></td>
                                            <td align='right'>{props.data.mass.kg} kg / {props.data.mass.lb} lb</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table> 
                            </div>
                            <div class="col-md-6" border='5%'>
                            <p className='textdet'>Rocket Name : {props.data.rocket_name}</p>
                            <p className='textdet'>Type : {props.data.rocket_type}</p>
                            <p className='textdet'>Country :  {props.data.country}</p>
                            <p className='textdet'>Company : {props.data.company}</p>
                            <p className='textdet'>First Flight :{props.data.first_flight}</p>
                            <p className='textdet'>Descrition : {props.data.description}</p>
                            <Button variant="outlined" color="primary" href={props.data.wikipedia}>WEBSITE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionDetail2