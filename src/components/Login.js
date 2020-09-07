// import React from 'react'
// import Auth from './Auth'

// function Login(props) {
//     return (
//         <div style={{textAlign:'center'}}>
//             <h1 >I am Login Page</h1>
//             <button onClick={()=>(Auth.login(()=>{
//                 props.history.push("/Dashboard")
//             }))} >Logged In</button>
//         </div>
//     )
// }

// export default Login;
import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { render } from '@testing-library/react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import Auth from './Auth';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(3),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


 class Login extends Component {
  state = {
    formData: {
        email: '',
        password: '',
    },
    submitted: false,
}

handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    console.log(this.state.formData)
}

handleSubmit = () => {
    this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
        (Auth.login(()=>{
        this.props.history.push("/Dashboard")}))
    });
}

 render(){
    const { classes } = this.props;
    const { formData, submitted } = this.state;
    return (
        <Container component="main" maxWidth="xs" style={{marginTop:'20px'}}>
          <CssBaseline />
          <div className={classes.paper} style={{textAlign:'center'}}>
            <Avatar style={{margin:'auto', backgroundColor:'rgb(220, 0, 78)'}}  >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit} className={classes.form}>
              <TextValidator
                variant="outlined"
                margin="normal"
                 
                fullWidth
                id="email"
                 
                name="email"
                autoComplete="email"
                autoFocus
                label="Email"
                onChange={this.handleChange}
                value={formData.email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
              />
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.handleChange}
                autoComplete="current-password"
                value={formData.password}
                validators={['required']}
                errorMessages={['this field is required']}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                    
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button> */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
          
        </Container>
      );
 }
}
 export default withStyles(useStyles)(Login);