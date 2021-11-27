import { Button, Col, DatePicker, Form, Input } from "antd";

function NewPollForm() {

    const {TextArea} = Input;

  return (
    <>
      <Form
        name="new-poll"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        style={{ margin: 100, borderStyle: "solid" }}
      >
        <Col style={{margin:50}}>
          <Form.Item label="Assunto">
            <Input />
          </Form.Item>

          <Form.Item label="Descrição">
            <TextArea style={{ height: 100}}/>
          </Form.Item>

          <Form.Item label="Término em">
            <DatePicker showTime={{ format: "HH:mm" }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10 }}>
            <Button type="primary" htmlType="submit">
              Criar Votação
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </>
  );
}

export default NewPollForm;
