import 'aos/dist/aos.css';
import React from 'react'
import {Container} from 'react-bootstrap';

const SectionDetail1 = (props) => {
    return(
        <React.Fragment>
        <section id='aboutDetail'>
                <div className="viewaboutDetail">
                    <Container>
                    <div className='textluanches'  data-aos="fade-up">
                            <p>{props.data}</p>
                        </div>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default SectionDetail1