import { Table } from 'antd'
import VoteButton from '../VoteButton/VoteButton'
import ResultTag from './../ResultTag/ResultTag'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PollList = () => {

    const { poll_list } = useSelector((state) => state.poll)
    const entries = poll_list

    const navigate = useNavigate();

    const columns = [
        {
            title: 'Assunto',
            dataIndex: 'subject',
            key: 'subject',
            align: 'center',
        },
        {
            title: 'Resultado',
            dataIndex: 'result',
            key: 'result',
            align: 'center',
            render: (result) => <ResultTag result={result} />,
        },
        {
            title: 'Ações',
            key: 'action',
            align: 'center',
            render: (text, record, index) => (
                <VoteButton {...record} />
            ),
        },
    ]

    return (
        <Table
            className={`clickable-row gx-table-responsive gx-w-100`}
            dataSource={entries}
            columns={columns}
            style={{ margin: 30 }}
            pagination={{ pageSize: 6 }}
            onRow={(record, index) => {
                return {
                    onClick: () => {
                        navigate(`poll/${record.id}`)
                    }
                };
            }}
        />
    )
}

export default PollList
