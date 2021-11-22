import {Menu} from 'antd';

const SideMenu = () => {
    return <>
        <Menu defaultSelectedKeys={[1]} mode="inline">
            <Menu.Item>
                <p> Início</p>
            </Menu.Item>
            <Menu.Item>
                <p> Nova votação</p>
            </Menu.Item>
            <Menu.Item>
                <p> Meu perfil</p>
            </Menu.Item>
            <Menu.Item>
                <p> Sair </p>
            </Menu.Item>
        </Menu>
    </>
}

export default SideMenu;