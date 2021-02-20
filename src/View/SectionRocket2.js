import 'aos/dist/aos.css';
import React from 'react'
import { Button } from '@material-ui/core'
const SectionRocket2 = () => {
    return (
        <section id='det'>
            <div className="detail" style={{ display: 'flex' }}>
                <div className='container' style={{ marginTop: '10%' }}>
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"
                    >
                        See More Deetail
                    </button>
                    <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Falcon 1</h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <div class="container">
                                        <div class="row"  >
                                            <div class="col-md-6">
                                                <table class="table" width="100%">
                                                    <tbody style={{ fontSize: '1em', fontWeight: 'normal', color: 'black' }}  >
                                                        <tr style={{ border: '2%' }}>
                                                            <th align='left'>HEIGHT</th>
                                                            <td align='right'>70 m/ 229.6 ft </td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>DIAMETER</th>
                                                            <td align='right'>12.2 m / 39.9 ft </td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>MASS</th>
                                                            <td align='right'>1,420,788 kg / 3,125,735 lb</td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>PAYLOAD TO LEO</th>
                                                            <td align='right'>63,800 kg / 140,660 lb </td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>PAYLOAD TO GTO</th>
                                                            <td align='right'>26,700 kg / 58,860 lb </td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>PAYLOAD TO MARS</th>
                                                            <td align='right'>16,800 kg / 37,040 lb</td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>PAYLOAD TO GTO</th>
                                                            <td align='right'>26,700 kg / 58,860 lb </td>
                                                        </tr>
                                                        <tr>
                                                            <th align='left'>PAYLOAD TO MARS</th>

                                                            <td align='right'>16,800 kg / 37,040 lb</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="col-md-6" border='5%'>
                                                <p className='textdet1'>Rocket Name : Falcon 1</p>
                                                <p className='textdet1'>Type : rocket</p>
                                                <p className='textdet1'>Country : Republic of the Marshall Islands</p>
                                                <p className='textdet1'>Company : SpaceX</p>
                                                <p className='textdet1'>First Flight : 2006-03-24</p>
                                                <p className='textdet1'>Payload : 2006-03-24</p>
                                                <p className='textdet1'>Descrition : The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.</p>
                                                <Button variant="outlined" color="primary" href="#outlined-buttons">WEBSITE</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionRocket2