import LoginPage from '../components/LoginPage/LoginPage'
import { useSelector } from 'react-redux'

function PrivateRoute({ component: Component, ...rest }) {
    const token = useSelector((state) => state.auth?.token) || localStorage.getItem("token");
    const user = useSelector((state) => state.user?.user) || localStorage.getItem("user");

    if (token && user) {
        return <Component />
    } else {
        return <LoginPage />
    }
}

export default PrivateRoute
