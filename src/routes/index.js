import { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import ProtectedRoutes from './protected/protectedRoutes';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

import {Login,SignUp} from '../screens';

const Routes = () => {
    const isAuthenticated = 'null';

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
                    {/* <Route path="*">
                        
                    </Route> */}
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;