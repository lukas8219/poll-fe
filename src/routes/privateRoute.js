import LoginPage from '../components/LoginPage/LoginPage';

function PrivateRoute({component: Component, ...rest}) {
    if(localStorage.getItem("token")){
        return <Component />
    } else {
        return <LoginPage />
    }
}


export default PrivateRoute;