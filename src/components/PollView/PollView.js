import { useParams } from 'react-router-dom'
import { fetchPollById } from '../../store/slices/Poll'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function PollView() {

    const { pollId } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPollById(pollId));
    }, [pollId, dispatch])


    const {
        id,
        subject,
        description,
        expiresAt,
        reportedAt,
        usersVotes,
        favor,
        against,
        result,
        creator,
    } = useSelector((state) => state.poll.poll_item);

    return (
        <>
            <p>{id}</p>
            <p>{subject}</p>
            <p>{description}</p>
            <p>{expiresAt}</p>
            <p>{reportedAt}</p>
            <p>{result}</p>
            <p>{favor}</p>
            <p>{against}</p>
        </>
    )
}
