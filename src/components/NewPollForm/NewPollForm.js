import { Button, Col, DatePicker, Form, Input, message } from 'antd'
import { createPoll } from '../../store/slices/Poll'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

function NewPollForm() {
    const { TextArea } = Input

    const dispatch = useDispatch()

    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [expiresAt, setExpiresAt] = useState()

    const clearFields = () => {
        setDescription(null)
        setSubject(null)
        setExpiresAt(null)
    }

    const handleSubjectChange = (event) => {
        const value = event?.target?.value
        setSubject(value)
    }

    const handleDescriptionChange = (event) => {
        const value = event?.target?.value
        setDescription(value)
    }

    const sendRequest = () => {
        const data = {
            subject: subject,
            description: description,
            expiresAt: expiresAt,
        }
        dispatch(createPoll(data)).then(clearFields)
    }

    const handleExpiresAtSelect = (e) => {
        const date = e?.format('YYYY-MM-DDTHH:MM:ss')
        setExpiresAt(date)
    }

    return (
        <>
            <Form
                name="new-poll"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                style={{ margin: 100, borderStyle: 'solid' }}
                onFinish={sendRequest}
            >
                <Col style={{ margin: 50 }}>
                    <Form.Item label="Assunto">
                        <Input onChange={handleSubjectChange} defaultValue={subject}/>
                    </Form.Item>

                    <Form.Item label="Descrição">
                        <TextArea
                            style={{ height: 100 }}
                            onChange={handleDescriptionChange}
                            defaultValue={description}
                        />
                    </Form.Item>

                    <Form.Item label="Término em">
                        <DatePicker
                            showTime={{ format: 'HH:mm' }}
                            onChange={handleExpiresAtSelect}
                            defaultValue={expiresAt}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10 }}>
                        <Button type="primary" htmlType="submit">
                            Criar Votação
                        </Button>
                    </Form.Item>
                </Col>
            </Form>
        </>
    )
}

export default NewPollForm
