import { Stomp } from '@stomp/stompjs'
import { message } from 'antd';

var isConnected = false
var establishingConnection = false;

const connect = () => {
    const client = Stomp.over(() => new WebSocket('ws://localhost:8080/chat'))

    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token');

    var headers = {
        login: '',
        password: token,
    }

    if (token && !isConnected && !establishingConnection) {
        establishingConnection = true;
        client.connect(headers, (connection) => {
            establishingConnection = false;
            isConnected = true;
            client.subscribe(`/user/${user.id}/queue/`, (data) => {
                message.info(data.body);
            })
        })
        client.onStompError((err) => console.log(err));
    }
}

const wsService = {
    connect: connect,
    disconnect: null
}

export default wsService;
