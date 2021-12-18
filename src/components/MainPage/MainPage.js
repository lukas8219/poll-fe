import { Row, Col } from 'antd';
import SideMenu from '../SideMenu/SideMenu';
import MainRoutes from '../../routes/mainRoutes';
const ws = require('../WebSocket/WebSocket');

const MainPage = () => {

    var user = JSON.parse(localStorage.getItem("user"));

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