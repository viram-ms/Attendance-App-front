import React from "react";
import DatePicker from "react-datepicker";
import PropTypes, { nominalTypeHack } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const styles = theme => ({ 
    root:{
      margin:'auto',
      textAlign:'center'
    },

    date:{
      padding:15,
      fontSize:20,
      textAlign:'center',
      marginLeft:20,
      borderRadius:5
    },
    button:{
      marginLeft:20,
      padding:12
    }

})
 
class Datepicker extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     startDate: new Date()
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  state={
    startDate: new Date()
  }
 
  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }
  
  updateChange = () => {
    console.log(this.state.startDate);
  }
 
  render() {
    const{ classes }= this.props
    return (
      <div className={classes.root} >
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        className={classes.date}
      />
     
      <Button variant="contained" color="primary" onClick={this.updateChange} className={classes.button}> Submit</Button>
      {/* <div>{this.state.startDate}</div> */}
      </div>
      
    );
  }
}

Datepicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Datepicker);