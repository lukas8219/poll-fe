import { Layout } from 'antd';
import LoginForm from './LoginForm';

const { Header, Content, Footer } = Layout;

function LoginPage() {
    return <>
        <Layout style={{alignItems:"center", height: 630}}>
            <Layout style={{ margin: 150, borderStyle: "solid", width: 500 }}>
                <Header style={{ textAlign: "center", color: "green", width: 500, alignSelf: "center" }}>
                    <span>Seja Bem vindo</span>
                </Header>
                <Content>
                    <LoginForm />
                </Content>
                <Footer style={{ textAlign: "center", height:50, alignSelf: "center"}}>
                    by Lucas <a href="https://github.com/lukas8219">@lukas8219</a>
                </Footer>
            </Layout>
        </Layout>
    </>
}

export default LoginPage;