import { Navigate, Outlet } from "react-router"
import useAuth from "../hooks/useAuth"
import { useLocation } from "react-router"

const PrivateOutlet = () => {

    const {user} = useAuth()
    const location = useLocation()

    return user?.email? <Outlet/> : <Navigate to='/login' state={{from : location}} replace/>
}

export default PrivateOutlet