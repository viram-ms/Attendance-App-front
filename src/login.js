import React from 'react';
import PersistentDrawerLeft from './Components/PersistentDrawerLeft';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Redirect} from 'react-router-dom';

const styles = theme => ({
  root: {
    margin:'auto',
    maxWidth:550,
    flexWrap: 'wrap',
    textAlign:'center'
  },
  formControl: {
    width:300,
    fontSize:16

  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    padding: 20,
    margin: 20,
    width: 300,
    '&:hover': {
      backgroundColor: 'black',
    }
  },
  paper: {
   padding:25,

  },
  intro: {
    margin:'auto'
  },
  title:{
    maxWidth:500,
    margin:'auto',
  }
});

class login extends React.Component {

  state = {
    age: '',
    logged_in: localStorage.getItem('token') ? true : false,
    username: '',
    password:'',
    teacherId:'',
   

  };


  componentDidMount() {
    // if (this.state.logged_in) {
    //   fetch('http://localhost:8000/login', {
    //     headers: {
    //       Authorization: `JWT ${localStorage.getItem('token')}`
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(json => {
    //       this.setState({ teacherId: json.teacherId });
    //     });
    // }
  }

   handle_login = async () => {
    console.log('hey');
   const res=await fetch('http://10.120.105.66:8000/Attendance/login-teacher/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      // mode: 'no-cors',
      body: JSON.stringify({
        teacherId: this.state.teacherId,
        password: this.state.password,
      })
    })
    console.log(res);
    const data = await res.json();
    console.log(data);

    if(res.status === 200){
      localStorage.setItem('token',data.token);
      
      this.setState({
        logged_in:true,
      

      });
      console.log(this.state);

    }
      // .then(res => console.log(res.json())  )

    //   .catch(error => {
    //     console.log(error, "catch the hoop");
    // });

      // .then(json => {
      //   localStorage.setItem('token', json.token);
      //   this.setState({
      //     logged_in: true,
      //     displayed_form: '',
      //     teacherId: json.user.teacherId
      //   });
      // });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, teacherId: '' });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <PersistentDrawerLeft />
        <Paper className={classes.paper}>
        <form  autoComplete="off">
        <h1>LOGIN</h1>
        <TextField style={{ width: 500 }}
          id="name"
          onChange={this.handleChange}
          label="Name"
          type="text"
          name="teacherId"
          margin="normal"
          variant="outlined"
        />
        <TextField style={{ width: 500 }}
          id="password"
          label="Password"
          onChange={this.handleChange}
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
        />
        <div className={classes.intro}>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handle_login}>Submit</Button>
        </div>
        </form>
        </Paper>
        {this.state.logged_in && <Redirect to={{pathname:'/teachermain',state:this.state.teacherId}} />}
      </div>
    );
  }
}
login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(login);

