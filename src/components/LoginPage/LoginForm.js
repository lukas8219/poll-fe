import { Input, Form, Button, Row, Col } from 'antd'
import { authenticate, authenticateByToken } from '../../store/slices/Auth'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function LoginForm() {
    const dispatch = useDispatch()
    const [ params ] = useSearchParams();
    const [authenticationTry, setAuthenticationTried] = useState(false);

    const token = params.get("token");

    console.log(token);

    useEffect(() => {
        if(token && !authenticationTry){
            dispatch(authenticateByToken(token))
            .then(() => {
                setAuthenticationTried(true);
                window.location = "/";
            });
        }
    }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFinish = () => {
        dispatch(authenticate({ email: email, password: password }))
    }

    return (
        <>
            <Col>
                <Row type="flex" align="center" style={{ height: 200 }}>
                    <Form
                        style={{ margin: 50 }}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                    >
                        <Form.Item label="Login" name="login">
                            <Input onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>

                        <Form.Item label="Senha" name="password">
                            <Input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></Input>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Entrar
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Col>
        </>
    )
}

export default LoginForm
