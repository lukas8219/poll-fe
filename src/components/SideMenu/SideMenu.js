import { Avatar, Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import SubMenu from 'antd/lib/menu/SubMenu'

const SideMenu = ({ name, pic }) => {
    return (
        <>
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
                        <Link to="/">
                            <span> Início</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/poll/new">
                            <span> Nova votação</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/profile">
                            <span>Editar perfil</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            localStorage.removeItem('token')
                            localStorage.removeItem('user')
                            window.location.reload()
                        }}
                    >
                        <Link to="/">
                            <span>Sair</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Row>
        </>
    )
}

export default SideMenu
