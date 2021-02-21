import React from 'react'
import {
  Dialog,
  IconButton,
  Typography,
  CircularProgress,
  Button,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    color: 'black',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogDetail = (props) => {

  const { isLoading, error, data } = useQuery(['dialogData', props.mission.id], () =>
    fetch(`https://api.spacexdata.com/v3/launches/${props.mission.id}`).then(res =>
      res.json()
    )
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open>
      {isLoading ? (
        <React.Fragment>
          <DialogContent dividers>
            <Typography gutterBottom>
              <CircularProgress color="secondary" />
            </Typography>
          </DialogContent>
        </React.Fragment>
      ) : (
          <React.Fragment>
            <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
              Mission : {data.mission_name}
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom style={{ textAlign: 'center' }}>
                {data.links ? (
                  <img src={data.links.mission_patch_small} />
                ) : (
                    <CircularProgress color="secondary" />
                  )}
              </Typography>
              <Typography gutterBottom style={{ fontWeight: 'blod' }}>
                Rocket Name : {data.rocket.rocket_name}
              </Typography>
              <Typography gutterBottom style={{ fontWeight: 'blod' }}>
                Detail : {data.details === null ? ('Null') : (data.details)}
              </Typography>
              <Typography gutterBottom>
                Launch Result : {`${data.launch_success}`}
              </Typography>
              <Typography gutterBottom  style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent:' space-between' }}>
                <Button variant="outlined"  href={data.links.article_link}>
                  Article
                </Button>
                <Button variant="outlined"  href={data.links.wikipedia}>
                  Wikipedia
                </Button>
                <Button variant="outlined"  href={data.links.video_link}>
                  Youtube
                </Button>
              </Typography>
            </DialogContent>
          </React.Fragment>
        )
      }
    </Dialog >
  )
}

export default DialogDetail