import InfiniteScroll from 'react-infinite-scroll-component'
import { List, Avatar, Row, Col, Select, Button, Space } from 'antd'
import { useState } from 'react'
import './poll_vote_list-style.css';
import PollVoteDecision from '../PollVoteDecision/PollVoteDecision';

export default function PollVoteList({ usersVotes }) {
    const [voteFilter, setVoteFilter] = useState('ALL')

    const { Option } = Select

    const votesFiltered = () => {
        if (voteFilter === 'ALL') {
            return usersVotes
        } else {
            return usersVotes.filter((item) => item.vote === voteFilter)
        }
    }

    const votesSize = () => {
        const votes = votesFiltered()
        return votes ? votes.length : 0
    }

    return (
        <>
            <Row justify="space-between">
                <p>Listagem de Votantes</p>
                <p>Quantidade de votos : {votesSize()}</p>
            </Row>
            <Row justify="space-between">
                <Col>
                    <p> Filtrar Voto</p>
                </Col>
                <Col>
                    <Select
                        defaultValue={voteFilter}
                        onChange={(value) => setVoteFilter(value)}
                    >
                        <Option value={'ALL'}> TODOS </Option>
                        <Option value={'FAVOR'}> FAVOR </Option>
                        <Option value={'AGAINST'}> CONTRA </Option>
                    </Select>
                </Col>
            </Row>
            <Row justify="center">
                <Button type="primary">Filtro avançado</Button>
            </Row>
            <Row className="vote-list-row">
                <Col span={24}>
                    <InfiniteScroll
                        dataLength={usersVotes ? usersVotes.length : 0}
                        scrollableTarget="scrollableDiv"
                    >
                        <List
                            dataSource={votesFiltered()}
                            renderItem={(user) => (
                                <List.Item
                                    key={user.id}
                                >
                                        <Avatar src={user.photo} size='small' />
                                        <p>{user.name}</p>
                                        <p>{user.email}</p>
                                        <PollVoteDecision {...user}  />
                                </List.Item>
                            )}
                        ></List>
                    </InfiniteScroll>
                </Col>
            </Row>
        </>
    )
}
