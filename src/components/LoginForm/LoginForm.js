import { Input, Form, Button, Row, Col, Divider } from 'antd'
import { authenticate, authenticateByToken } from '../../store/slices/Auth'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from '../../app.css'
import { GoogleOutlined } from '@ant-design/icons'

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

    const border = {
        border: 'solid',
        borderColor: 'transparent',
        borderRadius: '50px',
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFinish = () => {
        dispatch(authenticate({ email: email, password: password }))
    }

    return (
        <>
            <Col span={24} className="login-form border">
                <Row
                    type="flex"
                    align="middle"
                    style={{
                        height: 'fit-content',
                        width: 'fit-content',
                        flexDirection: 'column',
                        textAlign: 'center',
                    }}
                >
                    <Divider>
                        <b className='login-text'>Login</b>
                    </Divider>
                    <Form
                        style={{ marginLeft: 50, marginRight: 50 }}
                        wrapperCol={{ span: 24 }}
                        onFinish={onFinish}
                    >
                        <Form.Item name="login">
                            <Input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Insira seu email"
                                className="login-input border login-item"
                            />
                        </Form.Item>

                        <Form.Item name="password">
                            <Input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Insira sua senha"
                                className="login-input border login-item"
                            />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 0 }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                shape="round"
                                className="login-button"
                            >
                                Entrar
                            </Button>
                        </Form.Item>
                        <Form.Item wrapperCol={{offset:0}}>
                            <Button
                                type="primary"
                                shape="round"
                                style={{
                                    display: 'flex',
                                    textAlign: 'center',
                                    width: '100%',
                                    columnGap: 5,
                                }}
                                onClick={() =>
                                    (window.location =
                                        'http://localhost:8080/oauth2/authorization/google')
                                }
                            >
                                <GoogleOutlined
                                    style={{ alignSelf: 'center' }}
                                />
                                <p> Entrar com conta Google </p>
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Col>
        </>
    )
}

export default LoginForm
