import React from 'react';
import HomePage from './pages/Home';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ErrorPage from './pages/ErrorPage';
import UserDetailsPage from './pages/UserDetails';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path='/user/:id' render={(props) => {
                    return ( <UserDetailsPage {...props } /> )
                }} />
                <Route>
            <ErrorPage />
          </Route>
        </Switch>
        </Router>
        </Provider>
  );
}

export default App;
