import 'aos/dist/aos.css';
import React from 'react'
import {Container} from 'react-bootstrap';

const SectionRocket1 = () => {
    return(
        <React.Fragment>
        <section id='aboutrocket'>
                <div className="viewaboutrocket">
                    <Container>
                        <div className='textabout' data-aos="fade-up">
                            <p>Rocket</p>
                            <h6>SpaceX designs, manufactures and launches advanced rockets and spacecraft.</h6>
                            <h6>The company was founded in 2002 to revolutionize space technology,</h6>
                            <h6>with the ultimate goal of enabling people to live on other planets.</h6>
                        </div>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default SectionRocket1