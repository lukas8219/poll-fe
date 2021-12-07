import { Routes, Route } from 'react-router-dom'
import UserProfile from '../components/UserProfile/UserProfile'
import PollList from '../components/PollList/PollList'
import user from '../mockUserData'
import PollListMine from '../components/PollListMine/PollListMine'
import PollListParticipating from '../components/PollListParticipating/PollListParticipating'
import NewPollForm from '../components/NewPollForm/NewPollForm'
import { useDispatch } from 'react-redux'
import { fetchPollList } from '../store/slices/Poll'

function MainRoutes() {
    const dispatch = useDispatch()
    dispatch(fetchPollList)

    return (
        <>
            <Routes>
                <Route path="/" element={<PollList />} />
                <Route path="/profile" element={<UserProfile {...user} />} />
                <Route path="/poll/new" element={<NewPollForm />} />
                <Route
                    path="/poll/participating"
                    element={<PollListParticipating />}
                />
                <Route path="/poll/mine" element={<PollListMine />} />
            </Routes>
        </>
    )
}

export default MainRoutes
