import { Col, Row } from 'antd'
import './poll_simple_view-style.css';

export default function PollSimpleView({
    id,
    subject,
    description,
    expiresAt,
    createdAt,
}) {

    return (
        <>
            <Col className='view'>
                <Row><p className='poll-title'>{subject}</p></Row>
                <Row>
                    <p className="poll-description">{description}</p>
                </Row>
                <Row>
                    <p>Criado em : </p>
                    {createdAt}
                </Row>
                <Row>
                    <p>Terminado em: </p>
                    {expiresAt}
                </Row>
            </Col>
        </>
    )
}
