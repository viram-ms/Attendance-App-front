import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PersistentDrawerLeft from './Components/PersistentDrawerLeft';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(Sap_id,Name,p_a){
  id += 1;
  return { Sap_id, Name, p_a };
}

const rows = [
  createData('60004170103', 'Shail Shah', 'Present'),
  createData('60004170122', 'Viram Shah', 'Present'),
  createData('60004170084', 'Priya Shah', 'Present'),
  createData('60004170073', 'Nirav Jain', 'Absent'),
  createData('60004170083', 'Preet Soni', 'Absent'),
];

class AttendForDate extends React.Component {
  render(){
    const { classes } = this.props;

    return (
      <div>
          <PersistentDrawerLeft />
        <Grid container>
          <Grid item xs={12}><Typography align='center' component="h2" variant="display3">Attendance for Date:</Typography></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Paper>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>SAP ID</CustomTableCell>
                    <CustomTableCell>Name</CustomTableCell>
                    <CustomTableCell>Present/Absent</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow className={classes.row} key={row.id}>
                      <CustomTableCell component="th" scope="row">
                        {row.Sap_id}
                      </CustomTableCell>
                      <CustomTableCell>{row.Name}</CustomTableCell>
                      <CustomTableCell>{row.p_a}</CustomTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AttendForDate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttendForDate);