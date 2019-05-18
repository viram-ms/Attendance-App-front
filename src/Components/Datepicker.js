import React from "react";
// import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import { DatePicker } from "material-ui-pickers";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const styles = theme => ({ 
    root:{
      margin:'auto',
      textAlign:'center',
      display:'flex'
    },

    date:{
      padding:'10px 5px',
      fontSize:20,
      textAlign:'center',
      width:175,
      borderRadius:5
    },
    button:{
      margin:'0px 10px',
      padding:6,
      '&:hover': {
        backgroundColor: 'black',
        color:'white'
      }
     
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

  
 
  
  
 
  render() {
    const{ classes,handleChange,updateChange,startDate }= this.props
    return (
      <div className={classes.root} >
        {/* <DatePicker
        selected={startDate}
        onChange={handleChange}
        className={classes.date}
      /> */}
       <div className="picker">
        <DatePicker
          label="Date of birth"
          // value={selectedDate}
          disableFuture
          openTo="year"
          // format={getFormatString({
          //   moment: "DD/MM/YYYY",
          //   // dateFns: "dd/MM/yyyy",
          // })}
          views={["year", "month", "day"]}
          onChange={handleChange}
        />
      </div>
     <br />
      <Button variant="outlined" color="primary" onClick={updateChange} className={classes.button}> Submit</Button>
      
      {/* {`${this.state.startDate}`} */}
      </div>
      
    );
  }
}

Datepicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Datepicker);