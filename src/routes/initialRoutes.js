import { Routes, Route, } from 'react-router-dom';
import LoginPage from "../components/LoginPage/LoginPage"
import MainPage from '../components/MainPage/MainPage';

function InitialRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<MainPage />} />
        </Routes >
    );
}

export default InitialRoutes;