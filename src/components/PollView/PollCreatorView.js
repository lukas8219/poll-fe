import { Col, Row, Space } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'

export default function PollCreatorView({ id, photo, name, email }) {
    return (
        <>
            <Col span={8}><Avatar src={photo} size="large"/></Col>
            <Col span={16}>
                <Row >{name}</Row>
                <Row>{email}</Row>
            </Col>
        </>
    )
}
