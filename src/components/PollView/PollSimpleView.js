import { Row } from 'antd'

export default function PollSimpleView({
    id,
    subject,
    description,
    expiresAt,
    reportedAt,
}) {
    return (
        <>
            <Row>{subject}</Row>
            <Row>{description}</Row>
        </>
    )
}
