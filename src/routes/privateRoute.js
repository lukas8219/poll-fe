import { useSelector } from 'react-redux'
import LoginForm from '../components/LoginForm/LoginForm'

function PrivateRoute({ component: Component, ...rest }) {
    const token = useSelector((state) => state.auth?.token) || localStorage.getItem("token");
    const user = useSelector((state) => state.user?.user) || localStorage.getItem("user");

    if (token && user) {
        return <Component />
    } else {
        return <LoginForm />
    }
}

export default PrivateRoute
