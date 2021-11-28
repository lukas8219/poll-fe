import {
  DislikeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Space, Button } from "antd";

function VoteButton({ record }) {
  const YES_BUTTON_STYLE = { backgroundColor: "green", borderColor: "green" };
  const NO_BUTTON_STYLE = { backgroundColor: "red", borderColor: "red" };

  const YES_VOTE = (
    <>
      <Button type="primary" style={YES_BUTTON_STYLE} disabled={record}>
        <LikeOutlined />
      </Button>
    </>
  );

  const NO_VOTE = (
    <>
      <Button type="primary" style={NO_BUTTON_STYLE} disabled={record}>
        <DislikeOutlined />
      </Button>
    </>
  );

  const FULL_OPTIONS = (
    <>
      <Space size="middle">
        {YES_VOTE}
        {NO_VOTE}
      </Space>
    </>
  );

  const renderCorrectButton = (record) => {
    return record === "YES" ? <>{YES_VOTE}</> : <>{NO_VOTE}</>;
  };

  return (
    <>
      {typeof record === "string" ? (
        renderCorrectButton(record)
      ) : (
        <>{FULL_OPTIONS}</>
      )}
    </>
  );
}

export default VoteButton;
