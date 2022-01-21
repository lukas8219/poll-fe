import { Tooltip } from "antd";
import Avatar from "antd/lib/avatar/avatar";

function UserAvatar({
    photo, name,email, id, size
}) {

    const toolTipElement = <>
    <p>Nome: {name}</p>
    <p>Email: {email}</p>
    </>

    return <>
    <Tooltip title={toolTipElement}>
        <Avatar src={photo} size={size || 'small'} />
    </Tooltip>
    </>
}


export default UserAvatar;