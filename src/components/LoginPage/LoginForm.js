import { Input, Form, Button, Row, Col } from "antd";
import {useNavigate } from 'react-router-dom';
import { authenticate } from "../../store/slices/Auth";
import { useDispatch } from "react-redux";
import { useState } from 'react'
function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onFinish = () => {
        dispatch(authenticate({email: email, password: password}))
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
                        <Input onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        label="Senha"
                        name="password">
                        <Input type="password" onChange={(e) => setPassword(e.target.value)}></Input>
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