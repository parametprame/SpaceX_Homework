import Listlunches from './Listlunches'
import React from 'react'
import AOS from 'aos';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'black',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontSize: '1em',
        fontWeight: 'bold',
        color: "#FFF"   
    },
    btn: {
        border: "5px",
      },
}));


const Launches3 = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section id='det'>
            <div className="detail" style={{ display: 'flex' }}>
                <div className='container' style={{ marginTop: '10%' }}>
                    <div>
                        
                        <Button variant="contained" color="secondary" type="button" onClick={handleOpen} >DETAIL</Button>

                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <div className={classes.paper}>
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
                                </div>
                            </Fade>
                        </Modal>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Launches3