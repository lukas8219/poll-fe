import 'antd/dist/antd.css';
import InitialRoutes from '../routes/initialRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import Loader from './Loader'
import { useSelector } from 'react-redux'

const App = () => {
    const loading = useSelector((state) => state.loading.isLoading)
    return (
        <>
            {loading && <Loader />}
            <Router>
                <InitialRoutes />
            </Router>
        </>
    )
}

export default App
