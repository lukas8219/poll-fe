import { Routes, Route } from 'react-router-dom';
import UserProfile from '../components/UserProfile/UserProfile';
import PollList from '../components/PollList/PollList';
import user from '../mockUserData';
import entries from '../mockData';
import PollListMine from '../components/PollListMine/PollListMine';
import PollListParticipating from '../components/PollListParticipating/PollListParticipating';
import NewPollForm from '../components/NewPollForm/NewPollForm';

function MainRoutes() {
    return <>
        <Routes>
            <Route path="/" element={<PollList entries={entries} />} />
            <Route path="/profile" element={<UserProfile {...user} />} />
            <Route path="/poll/new" element={<NewPollForm />} />
            <Route path="/poll/participating" element={<PollListParticipating />} />
            <Route path="/poll/mine" element={<PollListMine />} />
        </Routes>
    </>
}


export default MainRoutes;