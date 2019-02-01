import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Paper, Button } from '@material-ui/core';
//import './style.css'

class Mysubjectcard extends React.Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (

      // <div>
      <Grid container
      
      style={{ marginTop: '100px', width: "100%" }}
      direction='row'
      justify='center'
      spacing={16}
      > <Grid item md={4}  >
      <Card style={{ height: 250, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" gutterBottom style={{ alignSelf: "flex-start" }}>OPEN SOURCE LAB-PYTHON</Typography>
        <CardActions disableActionSpacing style={{ alignSelf: "flex-end" }}>
          <IconButton style={{padding:30, color:'black'}}>
            <VerticalAlignBottomIcon />
          </IconButton>
          <Button variant="contained" color="primary">
            VIEW
          </Button>
        </CardActions>
      </Card>
    </Grid>

    <Grid item md={4}  >
      <Card style={{ height: 250, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" gutterBottom style={{ alignSelf: "flex-start" }}>ANALYSIS OF ALGORITHM</Typography>
        <CardActions disableActionSpacing style={{ alignSelf: "flex-end" }}>
          <IconButton style={{padding:30 , color:'black'}}>
            <VerticalAlignBottomIcon />
          </IconButton>
          <Button variant="contained" color="primary">
            VIEW
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item md={4}  >
      <Card style={{ height: 250, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" gutterBottom style={{ alignSelf: "flex-start" }}>OBJECT ORIENTED PROGRAMMING-JAVA</Typography>
        <CardActions disableActionSpacing style={{ alignSelf: "flex-end" }}>
          <IconButton style={{padding:30,color:'black'}}>
            <VerticalAlignBottomIcon />
          </IconButton>
          <Button variant="contained" color="primary">
            VIEW
          </Button>
        </CardActions>
      </Card>
    </Grid>
    
   </Grid>
   );
}
}
export default Mysubjectcard;