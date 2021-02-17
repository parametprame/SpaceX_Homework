import React from 'react'
import clip from '../media/cut_rocket.mp4'
import { useQuery } from 'react-query'
import elon from '../media/elon.jpg'
import gwy from '../media/gwy.jpg'
import tom from '../media/tom.jpg'

const Homepage = () => {

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.spacexdata.com/v3/info').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    console.log(data)
    return (
        <React.Fragment>
            <section id='aboutspacex'>
                <div className="viewaboutspacex">
                    <div className='container '>
                        <div className='textabout'>
                            <p>About : {data.name}</p>
                            <h6>SpaceX designs, manufactures and launches advanced rockets and spacecraft.</h6>
                            <h6>The company was founded in 2002 to revolutionize space technology,</h6>
                            <h6>with the ultimate goal of enabling people to live on other planets.</h6>
                            <h6>Founded: {data.founded} Founder: {data.founder}</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section id='ceocto'>
                <div className="ceo">
                    <div className='container'>
                        <div className="row row-cols-1 row-cols-md-3 g-5">
                            <div className="col">
                                <div className="card">
                                    <img
                                        src={elon}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}}>{data.ceo}</h5>
                                        <p className="card-text" style={{textAlign:'center'}}>
                                            CEO and CTO
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        src={gwy}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}}>{data.coo}</h5>
                                        <p className="card-text" style={{textAlign:'center'}}>
                                            COO
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        src={tom}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}}>{data.cto_propulsion}</h5>
                                        <p className="card-text" style={{textAlign:'center'}}>
                                            COO Propulsion 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='lau'>
                <div className="launches">
                    
                </div>
            </section>
            <section id='home'>
                <div className="view">
                    <video id="background-video" loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video >
                        <source src={clip} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay">
                        <p>Rockets</p>
                        <h6> Collect all of SpaceX's rockets and their descriptions of each rocket. </h6>
                        <h6>Including information on the usage of that rocket</h6>
                        <button type="button" className="btn btn-outline-light waves-effect my-2 btn-lg "><i className="fas fa-rocket">  See more</i></button>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
}

export default Homepage