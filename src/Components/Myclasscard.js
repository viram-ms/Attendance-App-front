import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import { Grid, Button, CardContent } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CreateIcon from '@material-ui/icons/Create';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import {Link,Redirect} from 'react-router-dom';




//import './style.css'

const styles = theme => ({

  card: {
    height: 225,

  },
  content: {
    padding: 2
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },


});

class Myclasscard extends React.Component {
  state = { expanded: false };

  componentDidMount(){
    console.log(this.props.class_subjects);
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (

      // <div>

      <Grid container spacing={16}>
          {this.props.class_subjects.map((subject) =>  {
            return(
            <Grid item md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" gutterBottom className={classes.content}><b>{subject.name}</b></Typography>
                <Typography variant="h6" gutterBottom className={classes.content}>Semester{subject.semester}</Typography>
                <Typography variant="title" gutterBottom className={classes.content}>{subject.subjectCode}</Typography>

              </CardContent>

              <CardActions disableActionSpacing style={{}}>
                <Button variant="contained" color="default" className={classes.button}>
                  Download
                <CloudDownloadIcon className={classes.rightIcon} />
                </Button>
                <Link to={{
                pathname:`/attendanceTable/${subject.div}`, state:subject}}><Button variant="contained" color="default" className={classes.button}>
                  View
                <RemoveRedEyeIcon className={classes.rightIcon} />
                </Button></Link>
                <Button variant="contained" color="default" className={classes.button}>
                  Edit
                <CreateIcon className={classes.rightIcon} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
            )

          })}

        {/* <Grid item md={6}  >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" gutterBottom className={classes.content}><b>PYTHON</b></Typography>
              <Typography variant="h6" gutterBottom className={classes.content}>S.E. A</Typography>
              <Typography variant="title" gutterBottom className={classes.content}>Simple Text</Typography>

            </CardContent>

            <CardActions disableActionSpacing style={{}}>
              <Button variant="contained" color="default" className={classes.button}>
                Download
        <CloudDownloadIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                View
        <RemoveRedEyeIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                Edit
        <CreateIcon className={classes.rightIcon} />
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={6}  >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" gutterBottom className={classes.content}><b>PYTHON</b></Typography>
              <Typography variant="h6" gutterBottom className={classes.content}>S.E. A</Typography>
              <Typography variant="title" gutterBottom className={classes.content}>Simple Text</Typography>

            </CardContent>

            <CardActions disableActionSpacing style={{}}>
              <Button variant="contained" color="default" className={classes.button}>
                Download
        <CloudDownloadIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                View
        <RemoveRedEyeIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                Edit
        <CreateIcon className={classes.rightIcon} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}  >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" gutterBottom className={classes.content}><b>PYTHON</b></Typography>
              <Typography variant="h6" gutterBottom className={classes.content}>S.E. A</Typography>
              <Typography variant="title" gutterBottom className={classes.content}>Simple Text</Typography>

            </CardContent>

            <CardActions disableActionSpacing style={{}}>
              <Button variant="contained" color="default" className={classes.button}>
                Download
        <CloudDownloadIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                View
        <RemoveRedEyeIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                Edit
        <CreateIcon className={classes.rightIcon} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}  >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" gutterBottom className={classes.content}><b>PYTHON</b></Typography>
              <Typography variant="h6" gutterBottom className={classes.content}>S.E. A</Typography>
              <Typography variant="title" gutterBottom className={classes.content}>Simple Text</Typography>

            </CardContent>

            <CardActions disableActionSpacing style={{}}>
              <Button variant="contained" color="default" className={classes.button}>
                Download
        <CloudDownloadIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                View
        <RemoveRedEyeIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                Edit
        <CreateIcon className={classes.rightIcon} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}  >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" gutterBottom className={classes.content}><b>PYTHON</b></Typography>
              <Typography variant="h6" gutterBottom className={classes.content}>S.E. A</Typography>
              <Typography variant="title" gutterBottom className={classes.content}>Simple Text</Typography>

            </CardContent>

            <CardActions disableActionSpacing style={{}}>
              <Button variant="contained" color="default" className={classes.button}>
                Download
        <CloudDownloadIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                View
        <RemoveRedEyeIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                Edit
        <CreateIcon className={classes.rightIcon} />
              </Button>
            </CardActions>
          </Card>
        </Grid> */}


      </Grid>
    );
  }
}
Myclasscard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Myclasscard);