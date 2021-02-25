import { useState } from 'react';
import { Link } from 'react-router-dom'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from "../../../img/Logo.png";
import useStyles from "../Style";

function SignUp() {
  const classes = useStyles();
  const [values, setValues] = useState({
    first: '',
    last: '',
    email: '',
    password: '',
    mobile: '',
    pan: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    return setValues({...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  const toggleBool = (prop) =>  (event) => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  return (
    <div id="search-wrapper">
      <div className="header">
        <nav className={classes.center + " nav"}>
        <ul>
          <li>
            <img className="logo" src={logo} alt="logo" />
          </li>
        </ul>
        </nav>
      </div>

      <div className="content-wapper">
        <div className="content e">
          <div className={classes.card}>
            <Typography variant="h2" color="inherit" style={{textAlign:'center'}}>Sign up</Typography>
            <form autoComplete="off" className={classes.form2} onSubmit={onSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField type="text" variant="standard" id="first" label="First name" name="first" onChange={handleChange} fullWidth required/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type="text" variant="standard" id="last" label="Last name" name="last" onChange={handleChange} fullWidth required/>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField type="email" variant="standard" id="email" label="Email" name="email" onChange={handleChange} fullWidth required/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type={values.showPassword?"text":"password"} variant="standard" id="password" label="Password" name="password" onChange={handleChange} fullWidth required InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleBool('showPassword')}
                      style={{padding:0}}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}/>
              </Grid>
              
              <Grid item sm={6} xs={6}>
                <TextField type="number" variant="standard" id="mobile" label="Mobile number" name="mobile" onChange={handleChange} fullWidth required/>
              </Grid>
              <Grid item sm={6} xs={6}>
                <TextField type="text" variant="standard" id="pan" label="Pan card number" name="pan" onChange={handleChange} fullWidth required/>
              </Grid>

              <Grid item xs={12} className="text-center">
                <Button type="submit" variant="contained" className="btn-submit">Sign up</Button>
              </Grid>

              <Grid item xs={12} className="text-center" style={{paddingTop: 14}}>
                <Typography color="initial">
                  Already have an account? <u><Link to="/sign-in">Sign in</Link></u>
                </Typography>
              </Grid>
            </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;