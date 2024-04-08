import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "./utils/toast";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import PrivateRoute from "./components/login/PrivateRoute";

const Layout = lazy(() => import("./layout/Layout"));
const Login = lazy(() => import("./pages/Login"));
// const SignUp = lazy(() => import("./pages/SignUp"));
const ForgetPassword = lazy(() => import("./pages/ForgotPassword"));
// const ResetPassword = lazy(() => import("./pages/ResetPassword"));

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgetPassword} />
          {/*<Route path="/signup" component={SignUp} />
          <Route path="/reset-password/:token" component={ResetPassword} /> */}

          <PrivateRoute>
            {" "}
            <Route path="/" component={Layout} />
          </PrivateRoute>
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
