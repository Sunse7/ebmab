import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

export function PriveteRoute({ children }) {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
        return <Navigate to='/logga-in' replace />
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
            return <Navigate to='/logga-in' replace />
        }
        return children;
    } catch (err) {
        return <Navigate to='/logga-in' replace />
    }
}