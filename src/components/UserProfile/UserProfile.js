import { ALIAS_KEYS } from '@babel/types';
import { Form, Input, Avatar } from 'antd';

const UserProfile = ({
    name, email, pic, phoneNumber
}) => {

    return <>
        <Form
            name="basic" >

            <Form.Item
                label="Foto de Perfil"
                name="pic"
                style={{ padding: 15 }}>
                <Avatar size="small" src={pic} />
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
                style={{ padding: 25 }}>
                <Input defaultValue={phoneNumber} />
            </Form.Item>

        </Form>
    </>
}


export default UserProfile;