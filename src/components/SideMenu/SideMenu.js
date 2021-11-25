import { Avatar, Menu, Row, Col } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

const SideMenu = ({ name, pic }) => {

    return <>
        <Row align="center">
            <Col span={8} style={{ padding: 15 }}>
                <Avatar size="80" src={pic} />
            </Col>
            <Col span={16} style={{ padding: 20 }}>
                <p>{name}</p>
            </Col>
        </Row>
        <Row>
            <Menu defaultSelectedKeys={0} mode="inline">
                <Menu.Item>
                    <span> Início</span>
                </Menu.Item>
                <SubMenu title="Votações">
                    <Menu.Item>
                        <span>Estou participando</span>
                    </Menu.Item>
                    <Menu.Item>
                        <span> Minha autoria</span>
                    </Menu.Item>
                    <Menu.Item>
                        <span> Nova votação</span>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item>
                    <span> Editar perfil</span>
                </Menu.Item>
                <Menu.Item>
                    <span> Sair </span>
                </Menu.Item>
            </Menu>
        </Row>
    </>
}

export default SideMenu;