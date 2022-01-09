import ResultTag from '../ResultTag/ResultTag';
import { Col, Row } from 'antd'
import './poll_simple_view-style.css'

export default function PollSimpleView({
    id,
    subject,
    description,
    expiresAt,
    createdAt,
    result
}) {
    const fCreatedAt = new Date(createdAt)
    const fExpiresAt = new Date(expiresAt)

    const formateDateToString = (date) => {
        return `${date.toLocaleDateString()} às ${date.toLocaleTimeString()}`
    }

    return (
        <>
            <Col className="view">
                <Row>
                    <p className="poll-title">{subject}</p>
                </Row>
                <Row>
                    <p className="poll-description">{description}</p>
                </Row>
                <Row className='view-info'>
                    <Row>
                        <b> Resultado </b>
                        <ResultTag result={result} />
                    </Row>
                    <Row>
                        <b>Criado em: </b>
                        <i>{formateDateToString(fCreatedAt)}</i>
                    </Row>
                    <Row>
                        <b>Terminado em: </b>
                        <i>{formateDateToString(fExpiresAt)}</i>
                    </Row>
                </Row>
            </Col>
        </>
    )
}
