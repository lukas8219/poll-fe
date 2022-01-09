import { Button, Row, Col } from 'antd'

export default function PollButton({ id }) {
    return (
        <>
            <Col>
                <Row justify='center'>
                    <Button
                        type="primary"
                        onClick={() => (window.location = `/poll/${id}`)}
                    >
                        Ler detalhes
                    </Button>
                </Row>
            </Col>
        </>
    )
}
