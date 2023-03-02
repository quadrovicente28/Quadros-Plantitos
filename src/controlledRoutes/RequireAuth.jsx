import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const location = useLocation();
    const auth = JSON.parse(localStorage.getItem('auth'));
    return(
        auth?.email
            ? <Outlet/>
            : <Navigate to='/login' state={{from: location}} replace />
    )
}

export default RequireAuth;