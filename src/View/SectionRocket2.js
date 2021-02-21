import 'aos/dist/aos.css';
import React from 'react'
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const SectionRocket2 = (props) => {
    const rocket_id = props.data
    const { isLoading, error, data } = useQuery(['rocket_id', rocket_id], () =>
        fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <React.Fragment>
            <div className="detail" style={{ display: 'flex' }}>
                <div className='container' style={{ marginTop: '10%' }}>
                    <button
                        type="button"
                        class="btn btn-outline-light"
                        data-mdb-ripple-color="dark"
                        data-mdb-toggle="modal"
                        data-mdb-target={`#exampleModal${data.rocket_id}`}
                    >
                        <FontAwesomeIcon icon={faRocket} />{' '}See More Deetail
                    </button>
                    <div
                        class="modal fade"
                        id={`exampleModal${data.rocket_id}`}
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header" style={{ backgroundColor: 'black' }}>
                                    <h5 class="modal-title" id="exampleModalLabel" style={{ color: 'white' }}>{data.rocket_name}</h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                        style={{ backgroundColor: 'white' }}
                                    >
                                    </button>
                                </div>
                                <div class="modal-body" style={{ backgroundColor: 'white' }}>
                                    <div class="container">
                                        <div class="row"  >
                                            <div class="col-md-6">
                                                <table class="table" width="100%">
                                                    <tbody style={{ fontSize: '1em', fontWeight: 'normal', color: 'black', borderBottomColor: 'black' }}  >
                                                        <tr style={{ border: '2%' }}>
                                                            <th align='left'>HEIGHT</th>
                                                            <td align='right'> {data.height.meters} m / {data.height.feet} ft </td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>DIAMETER</th>
                                                            <td align='right'>{data.diameter.meters} m / {data.diameter.feet} ft </td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>MASS</th>
                                                            <td align='right'>{data.mass.kg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} kg / {data.mass.lb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  lb</td>
                                                        </tr>
                                                        {data.payload_weights.map((data) => (
                                                            <tr>
                                                                <th align='left'>PAYLOAD TO {data.id.toUpperCase()}</th>
                                                                <td align='right'>{data.kg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} kg / {data.lb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} lb </td>
                                                            </tr>
                                                        ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="col-md-6" border='5%'>
                                                <p className='textdet1' style={{ color: 'black' }}>Rocket Name : {data.rocket_name}</p>
                                                <p className='textdet1' style={{ color: 'black' }}>Type : {data.rocket_type}</p>
                                                <p className='textdet1' style={{ color: 'black' }}>Country : {data.country}</p>
                                                <p className='textdet1' style={{ color: 'black' }}>Company : {data.company}</p>
                                                <p className='textdet1' style={{ color: 'black' }}>First Flight : {data.first_flight}</p>
                                                <p className='textdet1' style={{ color: 'black' }}>Payload : 2006-03-24</p>
                                                <p className='textdet1' style={{ color: 'black' }}>Descrition : {data.description}</p>
                                                <a type="button" class="btn btn-outline-dark waves-effect my-2 btn-md" data-mdb-ripple-color="dark" href={data.wikipedia} target="_blank">
                                                    Go to Wikipedia
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SectionRocket2