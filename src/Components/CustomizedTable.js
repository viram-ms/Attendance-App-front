import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    maxWidth: '60%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin:'auto',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%!important'
      }
   
  },
  table: {
    minWidth: 400,
   
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  
  
});

let id = 0;
function createData(name, sap, percent) {
  id += 1;
  return { id, name, sap, percent };
}

const rows = [
  createData('Viram shah', 60004170122, 80),
  createData('vishal shah', 60004170123, 80),
  createData('Viraj shah', 60004170123, 80),
  createData('yash shah', 60004170124, 80),
  createData('vasu shah', 60004170125, 80)

];

class CustomizedTable extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
            
              <Table className={classes.table}>
                <TableHead>
                  <TableRow >
                    <CustomTableCell style={{fontSize:'1rem'}}>Name</CustomTableCell>
                    <CustomTableCell  style={{fontSize:'1rem'}}>Sap ID</CustomTableCell>
                    <CustomTableCell style={{fontSize:'1rem'}}>Percentage</CustomTableCell>
                  
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (

                    <TableRow className={classes.row} key={row.id}>
                      <CustomTableCell component="th" scope="row">
                    <Link to={`${row.sap}`} style={{textDecoration:'none',color:'black'}}>
                        {row.name}
                      </Link>
                      </CustomTableCell>
                      <CustomTableCell >{row.sap}</CustomTableCell>
                      <CustomTableCell >{row.percent}</CustomTableCell>
                  
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          );

    }


 
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
