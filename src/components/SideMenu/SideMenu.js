import { Avatar, Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import SubMenu from 'antd/lib/menu/SubMenu'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const SideMenu = ({ name, pic }) => {
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()

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
                    <SubMenu title="Votações">
                        {/* <Menu.Item>
                        <Link to="poll/participating"><span>Estou participando</span></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/poll/mine"><span> Minha autoria</span></Link>
                    </Menu.Item> */}
                        <Menu.Item>
                            <Link to="/poll/new">
                                <span> Nova votação</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item>
                        <Link to="/profile">
                            <span>Editar perfil</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            localStorage.removeItem('token')
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
