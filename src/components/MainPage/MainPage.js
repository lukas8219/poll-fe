import { Row, Col } from 'antd';
import SideMenu from '../SideMenu/SideMenu';
import MainRoutes from '../../routes/mainRoutes';
import wsService from '../WebSocket/WebSocket';


const MainPage = () => {

    var user = JSON.parse(localStorage.getItem("user"));
    
    wsService.connect();
    
    return <>
        <Row type="grid">
            <Col span={5}>
                <SideMenu name={user?.name} pic={user?.pic} />
            </Col>
            <Col span={19}>
                <MainRoutes user={user}/>
            </Col>
        </Row>
    </>
}

export default MainPage;