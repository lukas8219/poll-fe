import { editUser, setUserPhoto } from '../../store/slices/User'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import './userProfile.css'
import api from '../../store/slices/axios'
import PollVoteDecision from '../PollVoteDecision/PollVoteDecision'
import { Tooltip, Col, Table } from 'antd'
import ResultTag from '../ResultTag/ResultTag'
import UserAvatar from '../userAvatar/UserAvatar'

const formateDateToString = (date) => {
    return `${date.toLocaleDateString()} às ${date.toLocaleTimeString()}`
}

const VoteQuantity = ({ favor, against, voteesQuantity }) => {
    return (
        <Tooltip title={`${favor} Y vs ${against} N`}>
            <span>{voteesQuantity} votos totais</span>
        </Tooltip>
    )
}

const UserProfile = (user) => {
    const dispatch = useDispatch()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [pic, setPic] = useState(user.pic)
    const [aboutMe, setAboutMe] = useState(user.aboutMe)
    const [creation, setCreation] = useState({})
    const [participations, setParticipations] = useState([])

    const token = localStorage.getItem('token')

    const columns = [
        {
            title: 'Criador',
            dataIndex: 'creator',
            key: 'creator',
            render: (record) => <UserAvatar {...record} />,
        },
    ]

    const handleUploadChange = ({ file }) => {
        if (file.status === 'done') {
            dispatch(setUserPhoto(file.response))
            setPic(file.response.pic)
        }
    }

    const submit = () => {
        dispatch(
            editUser({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
            })
        )
    }

    useEffect(() => {
        api.get(`v1/poll/creation`)
            .then((result) => result.data)
            .then((data) => {
                setCreation({
                    ...data,
                    fVotedAt: new Date(data.votedAt),
                    voteesQuantity: data.favor + data.against,
                })
            })

        api.get(`v1/poll/participations`)
            .then((result) => result.data)
            .then((data) => setParticipations(data))
    }, [])

    useEffect(() => console.log(participations), participations)

    const getVotedAt =
        creation.fVotedAt && formateDateToString(creation.fVotedAt)

    return (
        <>
            <div class="main-container">
                <div class="profile-container">
                    <img src={pic} class="profile-photo-container" />
                    <input type="button" value="Editar" />
                    <span
                        style={{
                            alignSelf: 'center',
                            position: 'relative',
                            bottom: '3%',
                        }}
                    >
                        Sobre mim:
                    </span>
                    <div class="about-me" value="Sobre mim">
                        <p>{aboutMe}</p>
                    </div>
                </div>
                <div class="details">
                    <div class="capa" nome={name} email={email}></div>
                    <div class="grid-container">
                        <div class="header">
                            Ultima votação criada {getVotedAt}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                height: '80%',
                            }}
                        >
                            <span>{creation.subject}</span>
                            <VoteQuantity {...creation} />
                            {console.log(creation)}
                            {creation.decision && (
                                <PollVoteDecision vote={creation.decision} />
                            )}
                            <ResultTag {...creation} />
                        </div>
                    </div>
                    <div class="grid-container">
                        <div class="header">Últimas participações:</div>
                        {participations.length > 0 && (
                            <Table
                                columns={columns}
                                pagination={{ pageSize: 3 }}
                                dataSource={participations}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
