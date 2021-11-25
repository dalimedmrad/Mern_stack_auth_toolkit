import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import PrivateRoute from './Components/router/PrivateRoute';
import './App.css';
import { currentUser } from './JS/userslice/userSlice';
import Home from './pages/home/Home';
import Signin from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import Navbar from './Components/navBar/Navbar';
import Footer from './Components/Footer/Footer';

const  App = () =>{
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if(isAuth){dispatch(currentUser());}
  }, []);

  return (
      <div>
          <Navbar/>
          <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/signup" exact component={SignUp}/>
          </Switch>
          <Footer/>
      </div>
    
  );
}

export default App;
