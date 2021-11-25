import { Row, Col } from 'antd';
import PollList from '../PollList/PollList';
import SideMenu from '../SideMenu/SideMenu';
import entries from '../../mockData';
import UserProfile from '../UserProfile/UserProfile';
import user from '../../mockUserData';

const MainPage = () => {
    return <>
        <Row type="grid">
            <Col span={5}><SideMenu {...user}/></Col>   
            <Col span={19}><UserProfile {...user}/></Col>
        </Row>
    </>
}

export default MainPage;