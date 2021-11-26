import { Input, Form, Button, Row, Col } from "antd";
import {        useNavigate } from 'react-router-dom';


function LoginForm() {

    const navigate = useNavigate();

    const onFinish = () => {
        navigate("/");
    }

    return <>
        <Col>
            <Row type="flex" align="center" style={{ height: 200 }}>
                <Form
                    style={{ margin: 50 }}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                >

                    <Form.Item
                        label="Login"
                        name="login">
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Senha"
                        name="password">
                        <Input type="password"></Input>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8 }}>
                        <Button type="primary" htmlType="submit">Entrar</Button>
                    </Form.Item>
                </Form>
            </Row>
        </Col>
    </>
}

export default LoginForm;