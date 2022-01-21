import { Form, Input, Avatar, Upload, Button, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { editUser, setUserPhoto } from '../../store/slices/User'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import './userProfile.css'
import profile from './download.png'

const UserProfile = (user) => {
    const dispatch = useDispatch()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [pic, setPic] = useState(user.pic)

    const token = localStorage.getItem('token')

    const handleUploadChange = ({ file }) => {
        if (file.status === 'done') {
            dispatch(setUserPhoto(file.response))
            setPic(file.response.pic)
        }
    }

    const submit = () => {
        const data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
        }
        console.log(data)
        dispatch(editUser(data))
    }

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
                        About me
                    </span>
                    <div class="about-me" value="Sobre mim">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque interdum rutrum sodales. Nullam mattis
                        fermentum libero, non volutpat.
                        </p>
                    </div>
                </div>
                <div class="details">
                    <div class="capa" nome={name} email={email}></div>
                    <div class="grid-container">
                        <div class="header">Ultima votação</div>
                    </div>
                    <div class="grid-container">
                        <div class="header">Últimas participações:</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
