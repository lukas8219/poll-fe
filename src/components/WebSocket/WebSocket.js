import { Stomp } from '@stomp/stompjs'
import { notification } from 'antd'
import ResultTag from '../ResultTag/ResultTag'

var isConnected = false
var establishingConnection = false

const connect = () => {
    const token = localStorage.getItem('token')

    if (token && !isConnected && !establishingConnection) {
        const client = Stomp.over(
            () => new WebSocket('ws://localhost:8080/chat')
        )
        const user = JSON.parse(localStorage.getItem('user'))
        
        var headers = {
            password: token,
        }

        establishingConnection = true
        client.connect(headers, (connection) => {
            establishingConnection = false
            isConnected = true
            client.subscribe(`/user/${user.id}/queue/`, (data) => {
                const response = JSON.parse(data.body)
                notification.open({
                    message: 'Chegou um resultado de Votação!',
                    description: (
                        <>
                            <ResultTag result={response.result} />
                        </>
                    ),
                })
            })
        })
    }
}

const wsService = {
    connect: connect,
    disconnect: null,
}

export default wsService
