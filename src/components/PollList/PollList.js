import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { Table, Space, Button } from "antd";
import ResultTag from "./../ResultTag/ResultTag";

const PollList = ({ entries }) => {
  const columns = [
    {
      title: "Assunto",
      dataIndex: "subject",
      key: "subject",
      align: "center",
    },
    {
      title: "Resultado",
      dataIndex: "result",
      key: "result",
      align: "center",
      render: (result) => <ResultTag result={result} />,
    },
    {
      title: "Ações",
      key: "action",
      align: "center",
      render: (text, record, index) => (
        <Space size="middle">
          <Button type="primary" style={{backgroundColor: "green", borderColor: "green"}}>
            <LikeOutlined />
          </Button>
          <Button type="primary"style={{backgroundColor: "red", borderColor:"red"}}>
            <DislikeOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      className={`clickable-row gx-table-responsive gx-w-100`}
      dataSource={entries}
      columns={columns}
    />
  );
};

export default PollList;
