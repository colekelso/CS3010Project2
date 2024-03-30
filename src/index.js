import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Registration from './Registration';
import Account from './Account';
import Login from './Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  logMeIn() {
    this.setState({
      loggedIn: true
    })
  }

  logMeOut() {
    this.setState({
      loggedIn: false
    })
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  passwordChange(e) {
    console.log(e.target.value);
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route page='/' element={
            <Layout loggedIn={this.state.loggedIn}
                    logoutMethod={this.logMeOut.bind(this)}/>
          }>
            <Route index element={
              <Home />
            } />
            <Route path='registration' element={
              <Registration />
            }/>
            <Route path='account' element={
              <Account username={this.state.username}
                       password={this.state.password}/>
            }/>
            <Route path='login' element={
              <Login loggedIn={this.state.loggedIn}
                     loginMethod={this.logMeIn.bind(this)}
                     usernameMethod={this.usernameChange.bind(this)}
                     passwordMethod={this.passwordChange.bind(this)}/>
            }/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

