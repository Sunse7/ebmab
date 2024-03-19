import { Navigate, Outlet } from "react-router-dom";

export function PriveteRoute({ children }) {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
        return <Navigate to='/logga-in' replace />
    }
    return children;
}