import React from 'react'
import AOS from 'aos';
import { Container } from 'react-bootstrap';

const Launches1 = () => {
    AOS.init({
        duration: 2000
    })
    return (
        <React.Fragment>
            <section id='luanches'>
                <div className="viewaluanches">
                    <Container>
                        <div className='textluanches'  data-aos="fade-up">
                            <p>LAUNCHES</p>
                        </div>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Launches1