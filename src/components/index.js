import './App.css'
import InitialRoutes from '../routes/initialRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return <>
        <Router>
            <InitialRoutes />
        </Router>
    </>
}

export default App;