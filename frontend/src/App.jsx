import React, { useContext } from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Messenger from './pages/Messenger/Messenger';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

const App = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {user ? <Home /> : <Register />}
                </Route>
                <Route path="/login">
                    {user ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/register">
                    {user ? <Redirect to="/" /> : <Register />}
                </Route>
                <Route path="/messenger">
                    {user ? <Redirect to="/" /> : <Messenger />}
                </Route>
                <Route path="/profile/:username">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
