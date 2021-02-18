import Listlunches from './Listlunches'
import React from 'react'
import AOS from 'aos';

const Launches2 = () => {
    AOS.init({
        duration: 2000
    })
    return (
        <React.Fragment>
            <section id='lau'>
                <div className="launches" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='container'>
                        <div className='row row-cols-1  row-cols-md-1' data-aos="fade-up">
                           <Listlunches />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Launches2