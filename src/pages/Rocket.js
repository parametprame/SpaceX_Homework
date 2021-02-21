import { useQuery } from 'react-query';
import React, { lazy, Suspense } from 'react';
import NotFound from '../components/404'
import Section2 from '../View/SectionRocket2'

const SectionRocket1 = lazy(() => import('../View/SectionRocket1'))
const SectionRocket2 = lazy(() => import('../View/SectionRocket2'))

const Rocketpage = () => {

    const { isLoading, error, data } = useQuery(['Falcon 9', 2], () =>
        fetch('https://api.spacexdata.com/v3/rockets').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    const RenderRocket = () => {
        const image = [
            "https:i.ytimg.com/vi/oFQQjthZfA4/maxresdefault.jpg",
            "https://cnet3.cbsistatic.com/img/hw-r4jFpdqaFotM6vYXIc0IQ8jQ=/1200x675/2020/07/13/0be85427-bec6-4d86-b94a-fd6df0f463ae/49956396622-84891c5192-3k.jpg",
            "https://www.teslarati.com/wp-content/uploads/2019/04/Falcon-Heavy-Flight-2-liftoff-Pauline-Acalin-6-2-c.jpg",
            "https://cdn.arstechnica.net/wp-content/uploads/2020/12/Starship-SN8-Dec-9-2020-0927.jpg"
        ]
        return (
            <React.Fragment>
                {Array.isArray(data) ? data.map((data, index) => {
                    return (
                        <section id='lau'>
                            <div className="launches" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='container'>
                                    <div className='row row-cols-1  row-cols-md-2' >
                                        <div className='col' >
                                            <img src={image[index]} alt="Avatar" className="imageTop" class="img-fluid rounded"></img>
                                        </div>
                                        <div className='col textabout'>
                                            <p style={{ fontSize: '2em', fontWeight: 'bold' }} >{data.rocket_name} </p>
                                            <h6 >{data.description}</h6>
                                            <Section2 data={data.rocket_id}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }) : <NotFound/>}
            </React.Fragment>
        )
    }
    return (
        <React.Fragment style={{ top: 0 }}>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <SectionRocket1 />
                {RenderRocket()}
            </Suspense>
        </React.Fragment>
    )
}

export default Rocketpage