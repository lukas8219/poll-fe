import { Modal, Button, Row } from 'antd';
import ResultTag from '../ResultTag/ResultTag';
import './style.less';

const PollDetailModal = ({
    id, subject, result
}) => {
    var modal = Modal.info({
        className: "poll-detail-modal",
        okButtonProps: {
            style: {
                display: 'none'
            }
        },
        content: (
            <>
                <Row className="gx-mb-3">
                    <ResultTag result={result} />
                </Row>
                <Row type="flex" align="center">
                    <p>
                        {`Assunto : ${subject}`}
                    </p>
                </Row>
                <Row type="flex" justify="end">
                    <Button type="primary" onClick={() => modal.destroy()}>
                        Sair
                    </Button>
                </Row>
            </>
        )
    });
    return modal;
}

export default PollDetailModal;