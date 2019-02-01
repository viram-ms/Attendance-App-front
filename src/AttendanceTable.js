import React from "react";
import DatePicker from "react-datepicker";
import PropTypes, { nominalTypeHack } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "react-datepicker/dist/react-datepicker.css";
import Datepicker from './Components/Datepicker';
 import PersistentDrawerLeft from './Components/PersistentDrawerLeft';
import CustomizedTable from "./Components/CustomizedTable";
import { Link } from 'react-router-dom';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const styles = theme => ({ 

})
 
class AttendanceTable extends React.Component {
    
  render() {
    const { classes } = this.props;
   
    return (
        <div>
            <PersistentDrawerLeft />
            <Datepicker />
            <CustomizedTable />
        </div>
    );
  }
}

AttendanceTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttendanceTable);

