import { useParams } from 'react-router-dom'
import { fetchPollById } from '../../store/slices/Poll'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import PollCreatorView from './PollCreatorView'
import { Row, Col } from 'antd'
import PollSimpleView from './PollSimpleView'

export default function PollView() {
    const { pollId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPollById(pollId))
    }, [pollId, dispatch])

    const {
        id,
        subject,
        description,
        expiresAt,
        reportedAt,
        usersVotes,
        favor,
        against,
        result,
        creator,
    } = useSelector((state) => state.poll.poll_item);

    const poll = {
        subject: subject,
        description: description,
        expiresAt: expiresAt,
        reportedAt: reportedAt,
    }

    const padding = { padding: '5%' }

    return (
        <>
        <Row justify='center' style={{ backgroundColor: 'purple', margin: 100 }}>
            <Col span={8} style={padding}>
                <Row>
                    <PollCreatorView {...creator} />
                </Row>
                <Row>
                    <PollSimpleView {...poll} />
                </Row>
            </Col>
            <Col span={12} style={padding}>
                <Row>
                    <PollCreatorView {...creator} />
                </Row>
                <Row>
                    <PollSimpleView {...poll} />
                </Row>
            </Col>
        </Row>
        </>
    )
}
