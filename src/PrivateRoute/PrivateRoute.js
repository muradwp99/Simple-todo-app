
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';

import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import auth from '../firebase.init';

const PrivateRoute = ({ children }) => {
    const [sendEmailVerification, sending, VerificationError] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;


};

export default PrivateRoute;