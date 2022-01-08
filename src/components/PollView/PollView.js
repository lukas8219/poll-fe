import { useParams } from 'react-router-dom'
import { fetchPollById } from '../../store/slices/Poll'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import PollCreatorView from './PollCreatorView'
import { Row, Col, Space } from 'antd'
import PollSimpleView from './PollSimpleView'
import PollVoteList from './PollVoteList'

export default function PollView() {
    const { pollId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPollById(pollId))
    }, [pollId, dispatch])

    const pollResult = useSelector((state) => state.poll.poll_item)

    return (
        <>
            <Row justify="space-around" style={{ margin: 50, height: '80%' }}>
                <Col span={10} style={{ padding: '2%', backgroundColor: '#B3B4B5', justifyContent:'space-evenly' }}>
                    <Space direction='vertical' size="large" style={{width: '100%'}}>
                    <Row style={{backgroundColor: '#88898B', padding: '2%'}}>
                        <PollCreatorView {...pollResult.creator} />
                    </Row>
                    <Row style={{backgroundColor: '#88898B'}}>
                        <PollSimpleView {...pollResult}/>
                    </Row>
                    </Space>
                </Col>
                <Col
                    span={12}
                    style={{ padding: '5%', backgroundColor: '#B3B4B5' }}
                >
                    <PollVoteList {...pollResult} />
                </Col>
            </Row>
        </>
    )
}
