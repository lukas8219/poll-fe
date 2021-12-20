import { Routes, Route } from 'react-router-dom'
import UserProfile from '../components/UserProfile/UserProfile'
import PollList from '../components/PollList/PollList'
import PollListMine from '../components/PollListMine/PollListMine'
import PollListParticipating from '../components/PollListParticipating/PollListParticipating'
import NewPollForm from '../components/NewPollForm/NewPollForm'

function MainRoutes({user}) {
    
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
