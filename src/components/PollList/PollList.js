import { Table } from "antd";
import VoteButton from "../VoteButton/VoteButton";
import ResultTag from "./../ResultTag/ResultTag";

const PollList = ({ entries }) => {
  const log = (record) => {
    console.log(record);
  };

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
      render: (text, record, index) => <VoteButton record={record?.voted} />,
    },
  ];

  return (
    <Table
      className={`clickable-row gx-table-responsive gx-w-100`}
      dataSource={entries}
      columns={columns}
      style={{ margin: 30 }}
      pagination={{ pageSize: 6 }}
    />
  );
};

export default PollList;
