import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import Navigation from './pages/shared/Navigation/Navigation';
import LogIn from './pages/LogIn/LogIn';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            {/* <Route exact path="/">
              <Home></Home>
            </Route> */}
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
