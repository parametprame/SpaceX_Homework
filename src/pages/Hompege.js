import React, {useEffect, useState} from 'react'
import clip from '../media/cut_rocket.mp4'
import axios from 'axios'
import spacex from '../media/spacex_about.jpg'

const Homepage = () => {

    const [data, setData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('https://api.spacexdata.com/v3/info')
            setData(result.data)
        }
        getData()
    }, [])

    return (
        <React.Fragment>
            <section id='aboutspacex'>
                <div className="viewaboutspacex">
                    <div className='container '>
                        <div className='textabout'>
                            {/* <p>About : {data.name}</p> */}
                            <h6> Collect all of SpaceX's rockets and their descriptions of each rocket. </h6>
                            <h6>Including information on the usage of that rocket</h6>
                        </div>
                    </div>
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