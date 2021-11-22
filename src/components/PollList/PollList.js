import { Table, Space, Button } from 'antd';
import ResultTag from './../ResultTag/ResultTag'
import entries from './../../mockData.js'
import PollDetailModal from './../PollDetailModal/PollDetailModal'

const PollList = () => {

    const handleDetails = (data) => {
        PollDetailModal(data);
    }


    const columns = [
        {
            title: "Assunto",
            dataIndex: "subject",
            key: "subject",
            align: "center"
        },
        {
            title: "Resultado",
            dataIndex: "result",
            key: "result",
            align: "center",
            render: result => (
                <ResultTag result={result} />
            )
        },
        {
            title: "Ações",
            key: "action",
            align: "center",
            render: (text, record, index) => (
                <Space size="middle">
                    <Button type="primary" onClick={
                        () => {
                            handleDetails(record)
                        }
                    }>
                        Detalhes
                    </Button>
                </Space>
            )
        }
    ]

    return <Table
        className={`clickable-row gx-table-responsive gx-w-100`}
        dataSource={entries} columns={columns} />
}

export default PollList;