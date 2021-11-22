import { Row, Col } from 'antd';
import PollList from '../PollList/PollList';
import SideMenu from '../SideMenu/SideMenu';

const MainPage = () => {
    return <>
        <Row type="grid">
            <Col span={3}><SideMenu /></Col>
            <Col span={21}><PollList /></Col>
        </Row>
    </>
}

export default MainPage;