import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../JS/userslice/userSlice";


const Signin = () => {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        Your Website &nbsp;
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/WLUHO9A_xik/1600x900)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  const [login, setlogin] = useState({
    email:"",
    password:"",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin=(e)=>{
    e.preventDefault();
    dispatch(loginUser(login));
      setTimeout(()=>{
        history.push("/");
        window.location.reload();
      },1000)
  };
  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setlogin({...login,email:e.target.value})}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setlogin({...login,password:e.target.value})}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}>
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signin;
