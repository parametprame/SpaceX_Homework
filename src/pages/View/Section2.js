import React from 'react'
import { useQuery } from 'react-query'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    button: {
        margin: '0.1em',
        zIndex: 999999999999,
        color: 'white',
        borderColor: 'white',
        marginTop: '2vh',
        height: '6vh'
    },
    button2: {
        margin: '0.1em',
        zIndex: 999999999999,
        color: 'white',
        borderColor: 'white',
    },
});

const Section2 = () => {
    const classes = useStyles();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.spacexdata.com/v3/info').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    AOS.init({
        duration: 2000
    })

    return (
        <React.Fragment>
            <section id='ceocto'>
                <div className="ceo">
                    <div className='container'>
                        <div className="row row-cols-1 row-cols-md-3 g-5">
                            <div className="col " data-aos="fade-up">
                                <div className="card">
                                    <img
                                        src='https://sv1.picz.in.th/images/2021/02/17/oOtYbk.jpg'
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center' }}>{data.ceo}</h5>
                                        <p className="card-text" style={{ textAlign: 'center' }}>
                                            CEO and CTO
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up">
                                <div className="card">
                                    <img
                                        src='https://sv1.picz.in.th/images/2021/02/17/oOtzav.jpg'
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center' }}>{data.coo}</h5>
                                        <p className="card-text" style={{ textAlign: 'center' }}>
                                            COO
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up">
                                <div className="card">
                                    <img
                                        src='https://sv1.picz.in.th/images/2021/02/17/oOtN4E.jpg'
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center' }}>{data.cto_propulsion}</h5>
                                        <p className="card-text" style={{ textAlign: 'center' }}>
                                            COO Propulsion
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Section2