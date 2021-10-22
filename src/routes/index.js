import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

import ProtectedRoutes from './protected/protectedRoutes';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';
import { Login, SignUp } from '../screens';

const Routes = () => {
    const accessToken = useSelector((state) => state?.userSlice?.accessToken)

    const isAuthenticated = () => {
        if (accessToken) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <PublicRoute
                        path="/login"
                        isAuthenticated={isAuthenticated}
                    >
                        <Login />
                    </PublicRoute>

                    <PublicRoute
                        path="/register"
                        isAuthenticated={isAuthenticated}
                    >
                        <SignUp />
                    </PublicRoute>

                    <PrivateRoute
                        path="/"
                        isAuthenticated={isAuthenticated}
                    >
                        <ProtectedRoutes />
                    </PrivateRoute>
                    <Redirect from="*" to="/" />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;