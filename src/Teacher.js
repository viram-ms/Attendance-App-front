import React from 'react';
<<<<<<< HEAD
import PersistentDrawerLeft from './Components/PersistentDrawerLeft';
import {Grid , Paper , Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl} from '@material-ui/core';
import PropTypes, { nominalTypeHack } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  Grid: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  text: {
    color: 'black',
  },
  button: {
    margin: 40,
    padding: 2,
    height: 50,
    width: 300,

  }
});

function typographyV1Theme(theme) {
  return createMuiTheme({
    ...theme,
    typography: {
      useNextVariants: false,
    },
  });
}


class Teacher extends React.Component{
  state={age: ''}

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={12} className={classes.Grid}>
          <Grid item xs> 
          </Grid>
          <Grid item xs>
            <div>
              <Typography component="h2" variant="display3" gutterBottom className={classes.text}>Teacher</Typography>
            </div>
            <div>
              <form autoComplete="off">
                <Grid container spacing={24}>
                  <Grid item xs={6}>
                    <TextField
                    id="outlined-name"
                    label="First Name"
                    value={this.state.name}
                    margin="normal"
                    variant="outlined"
                    fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                    id="outlined-name"
                    label="Surname"
                    value={this.state.name}
                    margin="normal"
                    variant="outlined"
                    fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-name"
                      label="User"
                      value={this.state.name}
                      margin="normal"
                      variant="outlined"
                      fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-name"
                      label="Specialisation"
                      value={this.state.name}
                      margin="normal"
                      variant="outlined"
                      fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-name"
                      label="Teacher-ID"
                      value={this.state.name}
                      margin="normal"
                      variant="outlined"
                      fullWidth />
                  </Grid>
                  <Grid item xs>
                    <FormControl>
                      <InputLabel htmlFor="age-simple">Subject</InputLabel>
                      <Select style={{width:150}}
                      value={this.state.age}
                      onChange={this.handleChange}
                      inputProps={{
                      name: 'age',
                      id: 'age-simple',
                      }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>OS</MenuItem>
                        <MenuItem value={20}>AOA</MenuItem>
                        <MenuItem value={20}>COA</MenuItem>
                        <MenuItem value={20}>OSL</MenuItem>
                        <MenuItem value={20}>Maths</MenuItem>
                        <MenuItem value={20}>CG</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </form>
              <div>
                <Button variant="contained" color="primary"  className={classes.button}>Submit</Button>
              </div>
            </div>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Teacher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Teacher);
=======

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class FilledTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="filled"
        />
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          helperText="hello"
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="filled"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="filled"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="filled-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
          variant="filled"
        />
      </form>
    );
  }

import PersistentDrawerLeft from './Components/PersistentDrawerLeft';

class Teacher extends React.Component{
    render(){
        return(
            <div>
       <PersistentDrawerLeft />
       <h1>Teacher</h1>
            
            </div>
        );
    }

}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);
>>>>>>> 5966a7f086939dade4d376f6e7497aec743a212e
