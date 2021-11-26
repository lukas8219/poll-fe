import { Row, Col } from 'antd';
import SideMenu from '../SideMenu/SideMenu';
import user from '../../mockUserData';
import MainRoutes from '../../routes/mainRoutes';

const MainPage = () => {
    return <>
        <Row type="grid">
            <Col span={5}>
                <SideMenu {...user} />
            </Col>
            <Col span={19}>
                <MainRoutes />
            </Col>
        </Row>
    </>
}

export default MainPage;