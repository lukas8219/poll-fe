import { DislikeFilled, LikeFilled } from "@ant-design/icons/lib/icons";

export default function PollVoteDecision({vote}){

    const options = {
        FAVOR: <LikeFilled/>,
        AGAINST: <DislikeFilled/>
    }

    return options[vote];
}