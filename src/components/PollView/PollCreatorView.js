import { Col, Row } from 'antd'

export default function PollCreatorView({ id, photo, name, email }) {
    return (
        <Row>
            <Col>{photo}</Col>
            <Col>
            <Row>
                {name}
            </Row>
            <Row>
                {email}
            </Row>
            </Col>
        </Row>
    )
}
