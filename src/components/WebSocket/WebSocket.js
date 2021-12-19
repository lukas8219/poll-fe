import { Stomp } from '@stomp/stompjs'
import { message } from 'antd';

var isConnected = false
var establishingConnection = false;

const connect = ({email, password}) => {
    const client = Stomp.over(() => new WebSocket('ws://localhost:8080/chat'))

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(isConnected)

    var headers = {
        login: email,
        password: password,
    }

    if (user && !isConnected && !establishingConnection) {
        establishingConnection = true;
        console.log(user);
        client.connect(headers, (connection) => {
            establishingConnection = false;
            console.log(connection)
            isConnected = true;
            client.subscribe('/user/1/queue/', (data) => {
                message.info(data.body);
            })
        })
    }
}

const wsService = {
    connect: connect,
    disconnect: null
}

export default wsService;
