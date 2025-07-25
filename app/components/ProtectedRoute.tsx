import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { useAuthStore } from "~/stores/auth"

const ProtectedRoute = () => {

    const { isAuthenticated } = useAuthStore()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return isAuthenticated ? <Outlet/> : null
}
export default ProtectedRoute

