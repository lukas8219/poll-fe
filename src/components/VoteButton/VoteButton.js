import { DislikeOutlined, LikeOutlined } from '@ant-design/icons'
import { Space, Button } from 'antd'
import { useDispatch } from 'react-redux';
import {voteFavor, voteAgainst} from '../../store/slices/Poll';

function VoteButton({id, vote}) {
    const YES_BUTTON_STYLE = { backgroundColor: 'green', borderColor: 'green' }
    const NO_BUTTON_STYLE = { backgroundColor: 'red', borderColor: 'red' }

    const dispatch = useDispatch();

    const BUTTON = ({ style, icon, action }) => {
        return (
            <>
                <Button
                    type="primary"
                    style={style}
                    disabled={vote}
                    onClick={action}
                >
                    {icon}
                </Button>
            </>
        )
    }

    const handleFavor = () => {
      dispatch(voteFavor(id))
    };
    const handleAgainst = (e) => {
      dispatch(voteAgainst(id))
    };

    const YES_VOTE = BUTTON({
      style: YES_BUTTON_STYLE,
      action: handleFavor,
      icon: (<LikeOutlined />)
    });

    const NO_VOTE = BUTTON({
      style: NO_BUTTON_STYLE,
      action: handleAgainst,
      icon: (<DislikeOutlined />)
    });

    const FULL_OPTIONS = (
        <>
            <Space size="middle">
                {YES_VOTE}
                {NO_VOTE}
            </Space>
        </>
    )

    const renderCorrectButton = (vote) => {
        return vote === 'FAVOR' ? <>{YES_VOTE}</> : <>{NO_VOTE}</>
    }

    return (
        <>
            {typeof vote === 'string' ? (
                renderCorrectButton(vote)
            ) : (
                <>{FULL_OPTIONS}</>
            )}
        </>
    )
}

export default VoteButton
