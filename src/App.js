import Home from './components/Home'
import './App.css';
import CoachSignup from './components/CoachSignup';
import CoachLogin from './components/CoachLogin';
import CoachHome from './components/CoachHome';
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
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
