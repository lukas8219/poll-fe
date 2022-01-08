import { Col, Row, Input } from 'antd'

export default function PollSimpleView({
    id,
    subject,
    description,
    expiresAt,
    reportedAt,
    createdAt,
    style,
}) {
    const { TextArea } = Input

    return (
        <>
            <Col style={style}>
                <Row>{subject}</Row>
                <Row>
                    <p style={{
                        overflow: 'auto',
                        height: '200px'
                    }}>{description}</p>
                </Row>
                <Row><p>Criado em   : </p>{createdAt}</Row>
                <Row><p>Terminado em: </p>{expiresAt}</Row>
            </Col>
        </>
    )
}
