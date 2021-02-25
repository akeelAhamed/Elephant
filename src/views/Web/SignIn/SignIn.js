import { useState } from 'react';
import { Link } from 'react-router-dom'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import logo from "../../../img/Logo.png";
import useStyles from "../Style";

function SignIn() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
    checked: false,
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
            <Typography variant="h2" color="inherit" style={{textAlign:'center'}}>Login</Typography>
            <form autoComplete="off" className={classes.form} onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField type="email" variant="filled" id="email" label="Email" name="email" onChange={handleChange('email')} fullWidth required/>
              </Grid>
              <Grid item xs={12}>
                <div style={{display: 'flex'}}>
                  <TextField type={values.showPassword?"text":"password"} variant="filled" id="password" label="Password" name="password" onChange={handleChange('password')} fullWidth required/>
                  <div className={classes.passwordIcon}>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleBool('showPassword')}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} xs={6}>
                <FormControlLabel
                  control={<Checkbox checked={values.checked} onChange={toggleBool('checked')} name="checked" 
                  color="primary"/>}
                  label="Remember me"
                />
              </Grid>
              <Grid item sm={6} xs={6} className="text-right" style={{paddingTop: 14}}>
                <Link to="/forget-password">Forget password</Link>
              </Grid>

              <Grid item xs={12} className="text-center">
                <Button type="submit" variant="contained" className="btn-submit">Submit</Button>
              </Grid>

              <Grid item xs={12} className="text-center" style={{paddingTop: 14}}>
                <Typography color="initial">
                  Dont have an account? <u><Link to="/sign-up">Sign up</Link></u>
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

export default SignIn;