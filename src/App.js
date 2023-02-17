import Home from './components/Home'
import './App.css';
import CoachSignup from './components/CoachSignup';
import CoachLogin from './components/CoachLogin';
import CoachHome from './components/CoachHome';
import Coachviewprofile from './components/Coachviewprofile';
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import BookAppointment from './components/BookAppointment';
import ConfirmAppointment from './components/ConfirmAppointment';
import UserAppointments from './components/UserAppointments';
import RegisterConfirmation from './components/RegisterConfirmation';
import UserProfile from './components/UserProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="coachdashboard" element={<CoachHome/>}/>
          <Route path="coachlogin" element={<CoachLogin/>}/>
          <Route path="coachsignup" element={<CoachSignup/>}/>
          <Route path="coachviewprofile" element={<Coachviewprofile/>}/>
          <Route path="usersignup" element={<UserSignup/>}/>
          <Route path="dashboard" element={<UserDashboard/>}/>
          <Route path="userlogin" element={<UserLogin/>}/>
          <Route path="bookappointment" element={<BookAppointment/>}/>
          <Route path="confirmappointment" element={<ConfirmAppointment/>}/>
          <Route path="userappointments" element={<UserAppointments/>}/>
          <Route path="registerconfirmation" element={<RegisterConfirmation/>}/>
          <Route path="/userprofile/:id" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
