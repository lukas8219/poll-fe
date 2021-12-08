import { Form, Input, Avatar, Upload, Button, Row } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { editUser } from '../../store/slices/User'
import { useDispatch} from 'react-redux'
import { useState } from 'react'

const UserProfile = (user) => {
    const dispatch = useDispatch()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)

    const submit = () => {
        const data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
        }
        console.log(data);
        dispatch(editUser(data))
    }

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                onFinish={submit}
            >
                <Form.Item name="pic" align="center" style={{ padding: 5 }}>
                    <Row align="center" style={{ padding: 15 }}>
                        <Avatar size={150} src={user.pic} />
                    </Row>
                    <Row align="center">
                        <Upload showUploadList={false} maxCount={1}>
                            <Button icon={<UploadOutlined />}>
                                Editar foto
                            </Button>
                        </Upload>
                    </Row>
                </Form.Item>

                <Form.Item label="Nome" name="name" style={{ padding: 15 }}>
                    <Input onChange={(e) => setName(e.target?.value)} defaultValue={name} />
                </Form.Item>

                <Form.Item label="Email" name="email" style={{ padding: 15 }}>
                    <Input
                        onChange={(e) => setEmail(e.target?.value)}
                        defaultValue={email}
                    />
                </Form.Item>

                <Form.Item
                    label="Número de telefone"
                    name="phoneNumber"
                    style={{ padding: 15 }}
                >
                    <Input
                        onChange={(e) => setPhoneNumber(e.target?.value)}
                        defaultValue={phoneNumber}
                    />
                </Form.Item>

                <Form.Item align="center">
                    <Row align="center">
                        <Button type="primary" htmlType="submit">
                            Salvar
                        </Button>
                    </Row>
                </Form.Item>
            </Form>
        </>
    )
}

export default UserProfile
