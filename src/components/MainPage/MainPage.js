import { Row, Col } from 'antd'
import SideMenu from '../SideMenu/SideMenu'
import MainRoutes from '../../routes/mainRoutes'
import wsService from '../WebSocket/WebSocket'
import { fetchPollList } from '../../store/slices/Poll'
import { useDispatch } from 'react-redux'
import { getUser } from '../../store/slices/User'
import { useSelector } from 'react-redux'

var loading = false
const MainPage = () => {
    let user = JSON.parse(localStorage.getItem('user'))

    const token = localStorage.getItem('token')
    const userState = useSelector((state) => state.user)

    const dispatch = useDispatch()

    if (token && !userState.user && !loading) {
        dispatch(getUser)
        dispatch(fetchPollList)
        loading = true
    }

    if (!loading) {
        dispatch(fetchPollList)
        loading = true
    }

    wsService.connect()

    return (
        <>
            <Col
                className='border login-form' >   
                <Row type="flex">
                    <Col span={24}>
                        <SideMenu name={user?.name} pic={user?.pic} />
                    </Col>
                    
                </Row>
                <Row style={{height: '600px'}}>
                    <Col span={24}>
                        <MainRoutes user={user} />
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default MainPage
