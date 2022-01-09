import { useParams } from 'react-router-dom'
import { fetchPollById } from '../../store/slices/Poll'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import PollCreatorView from './PollCreatorView'
import { Row, Col, Space } from 'antd'
import PollSimpleView from './PollSimpleView'
import PollVoteList from './PollVoteList'
import './poll_view-style.css'

export default function PollView() {
    const { pollId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPollById(pollId))
    }, [pollId, dispatch])

    const pollResult = useSelector((state) => state.poll.poll_item)

    return (
        <>
            <Row justify="space-around">
                <Col span={10} className="creatorCol">
                    <Space
                        direction="vertical"
                        size="large"
                    >
                        <Row>
                            <PollCreatorView {...pollResult.creator} />
                        </Row>
                        <Row>
                            <PollSimpleView {...pollResult} />
                        </Row>
                    </Space>
                </Col>
                <Col span={12} className="votesCol">
                    <PollVoteList {...pollResult} />
                </Col>
            </Row>
        </>
    )
}
