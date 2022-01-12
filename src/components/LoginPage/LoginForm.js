import { Input, Form, Button, Row, Col } from 'antd'
import { authenticate, authenticateByToken } from '../../store/slices/Auth'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function LoginForm() {
    const dispatch = useDispatch()
    const [params] = useSearchParams()
    const [authenticationTry, setAuthenticationTried] = useState(false)

    const token = params.get('token')

    console.log(token)

    useEffect(() => {
        if (token && !authenticationTry) {
            dispatch(authenticateByToken(token)).then(() => {
                setAuthenticationTried(true)
                window.location = '/'
            })
        }
    }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFinish = () => {
        dispatch(authenticate({ email: email, password: password }))
    }

    return (
        <>
            <Col span={24}>
                <Row
                    type="flex"
                    align="middle"
                    style={{ height: 'fit-content', flexDirection: 'column' }}
                >
                    <Form
                        style={{ margin: 50 }}
                        wrapperCol={{ span: 24 }}
                        onFinish={onFinish}
                    >
                        <Form.Item name="login">
                            <Input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Insira seu email"
                            />
                        </Form.Item>

                        <Form.Item name="password">
                            <Input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Insira sua senha"
                            ></Input>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 0 }}>
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
