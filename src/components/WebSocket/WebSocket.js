import {Client} from '@stomp/stompjs';
import { message } from 'antd';

const client = new Client();

const user = JSON.parse(localStorage.getItem("user"));

client.configure({
    brokerURL: "ws://localhost:8080/chat",
    onConnect: () => {
        console.log("Connected to WS");
        client.subscribe(`/user/${user.id}/queue/`, (data) => {
            const jsonData = JSON.parse(data);
            message.info(jsonData.id);
        })
    },

});

export default client;