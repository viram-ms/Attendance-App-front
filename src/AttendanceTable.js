import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "react-datepicker/dist/react-datepicker.css";
import Datepicker from './Components/Datepicker';
 import PersistentDrawerLeft from './Components/PersistentDrawerLeft';
import CustomizedTable from "./Components/CustomizedTable";
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

