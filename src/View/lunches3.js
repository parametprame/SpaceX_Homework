import React from 'react'
import { Button } from '@material-ui/core'

const Launches3 = () => {
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
                        <div class="modal-dialog modal-lg">
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
                                                <img style={{ marginTop: '10%', justifyItems: 'center',marginLeft:"10%" }}  src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="Avatar" className="imageTop" class="img-fluid rounded"></img>
                                            </div>
                                            <div class="col-md-6" border='5%'>
                                                <p className='textdet1'>Rocket Name : Falcon 1</p>
                                                <p className='textdet1'>Rocket Type : Merlin1A</p>
                                                <p className='textdet1'>Payload ID : FalconSAT-2</p>
                                                <p className='textdet1'>Nationality : United States</p>
                                                <p className='textdet1'>Mission Name : FalconSat</p>
                                                <p className='textdet1'>Mission Name : FalconSat</p>
                                                <p className='textdet1'>Details: Engine failure at 33 seconds and loss of vehicle</p>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <Button variant="contained" color="primary" href="#outlined-buttons" border='10px'>WEBSITE</Button>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <Button variant="contained" color="secondary" href="#outlined-buttons" >VIDEO</Button>
                                                    </div>
                                                    
                                                </div>

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

export default Launches3
{/* <div className={classes.paper}>
                                    <h2 id="transition-modal-title" >FalconSat (2006)</h2>
                                    <img style={{marginTop: '10%', justifyItems: 'center'}} class="rounded mx-auto d-block" src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="Avatar"  className="imageTop" class="img-fluid rounded"></img>
                                    <p style={{marginTop: '10%'}} id="transition-modal-description"  >RocKet Name : Falcon 1</p>
                                    <p id="transition-modal-description">Rocket Type : Merlin1A</p>
                                    <p id="transition-modal-description">Payload ID : FalconSAT-2</p>
                                    <p id="transition-modal-description">Nationality : United States</p>
                                    <p id="transition-modal-description">Mission Name : FalconSat</p>
                                    <p id="transition-modal-description">Details: Engine failure at 33 seconds and loss of vehicle</p>

                                    <Button variant="contained" color="primary" href="#outlined-buttons" >WEBSITE</Button>
                                    <Button variant="contained" color="primary" href="#outlined-buttons" >VIDEO</Button>
                                    <Button variant="contained" color="primary" href="#outlined-buttons">YOUTUBE</Button>
                                </div> */}