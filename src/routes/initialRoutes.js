import PrivateRoute from './privateRoute';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage'
import LoginPage from '../components/LoginPage/LoginPage'

function InitialRoutes() {
    return (
        <Routes>
                <PrivateRoute path="/" component={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
        </Routes >
    );
}

export default InitialRoutes;