import { Avatar, Menu, Row, Col, Button } from 'antd'
import './sideMenu.css'
import { Link } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons'

const SideMenu = ({ name, pic }) => {
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.reload()
    }
    return (
        <>
            <Row
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '5%',
                }}
            >
                <Row
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Row
                        style={{
                            alignItems: 'center',
                            columnGap: '20px',
                        }}
                    >
                        <Avatar size="80" src={pic} />
                        <div>Bem vindo, {name}</div>
                    </Row>
                    <Menu
                        defaultSelectedKeys={0}
                        mode="horizontal"
                        className="sideMenu"
                        style={{
                            width: 'fit-content',
                            display: 'flex',
                            borderBottom: 'none',
                        }}
                    >
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
                                <span>Perfil</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Button type="primary" value="Sair" onClick={logout}
                    style={{
                        backgroundColor: 'var(--1th-color)',
                        borderColor: 'var(--1th-color)' }}>
                        <LogoutOutlined />
                    </Button>
                </Row>
            </Row>
        </>
    )
}

export default SideMenu
