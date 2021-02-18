import React from 'react'
import { useQuery } from 'react-query'
import AOS from 'aos';
import {Container} from 'react-bootstrap';

const Section1 = () => {
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

    return(
        <React.Fragment>
            <section id='aboutspacex'>
                <div className="viewaboutspacex">
                    <Container>
                        <div className='textabout' data-aos="fade-up">
                            <p>{data.name}</p>
                            <h6>SpaceX designs, manufactures and launches advanced rockets and spacecraft.</h6>
                            <h6>The company was founded in 2002 to revolutionize space technology,</h6>
                            <h6>with the ultimate goal of enabling people to live on other planets.</h6>
                            <h6>Founded: {data.founded} Founder: {data.founder}</h6>
                        </div>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Section1