import { Form, Input, Avatar, Upload, Button, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons'

const UserProfile = ({
    name, email, pic, phoneNumber
}) => {

    const submit = ({ name, email, phoneNumber }) => {
        console.log(name, email, phoneNumber);
    }

    return <>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={submit} >

            <Form.Item
                name="pic"
                align="center"
                style={{ padding: 5 }}>
                <Row align="center" style={{ padding: 15 }}>
                    <Avatar size={150} src={pic} />
                </Row>
                <Row align="center">
                    <Upload >
                        <Button icon={<UploadOutlined />}>Editar foto</Button>
                    </Upload>
                </Row>
            </Form.Item>

            <Form.Item
                label="Nome"
                name="name"
                style={{ padding: 15 }}
            >
                <Input defaultValue={name} />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                style={{ padding: 15 }}>
                <Input defaultValue={email} />
            </Form.Item>

            <Form.Item
                label="Número de telefone"
                name="phoneNumber"
                style={{ padding: 15 }}>
                <Input defaultValue={phoneNumber} />
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
}


export default UserProfile;