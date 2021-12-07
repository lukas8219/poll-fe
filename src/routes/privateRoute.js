import {Navigate, Route} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {
    if(localStorage.getItem("token")){
        return <Route {...rest} ><Component /></ Route>
    } else {
        return <Route ><Navigate to={{pathname: '/login'}} /></Route>
    }
}


export default PrivateRoute;