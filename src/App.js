import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import Navigation from './pages/shared/Navigation/Navigation';
import LogIn from './pages/LogIn/LogIn';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllProducts from './pages/AllProducts/AllProducts';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import Payments from './pages/Payments/Payments';
import Review from './pages/Review/Review';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
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
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/payment">
              <Payments></Payments>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <PrivateRoute path="/placeorder/:orderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
