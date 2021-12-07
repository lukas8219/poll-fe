import PrivateRoute from './privateRoute';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage'
import LoginPage from '../components/LoginPage/LoginPage'

function InitialRoutes() {
    return (
        <Routes>
                <Route path="*" element={<PrivateRoute component={MainPage} />} />
        </Routes >
    );
}

export default InitialRoutes;