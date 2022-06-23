import './App.css';
import './Assests/font-awesome/css/font-awesome.min.css';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import MedicalServices from './Components/MedicalServices/MedicalServices';
import Contact from './Components/Contact/Contact';
import BookAppointment from './Components/BookAppointment/BookAppointment';
import Confirmation from './Components/Confirmation/Confirmation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><Register/></>} />
          <Route path='/login' element={<><Header /><Login/></>} />
          <Route path='/home' element={<><Header /><Home/></>} />
          <Route path='/about' element={<><Header /><About/></>} />
          <Route path='/medicalServices' element={<><Header /><MedicalServices/></>} />
          <Route path='/contact' element={<><Header /><Contact/></>} />
          <Route path='/bookAppointment' element={<><Header /><BookAppointment/></>} />
          <Route path='/confirmation' element={<Confirmation/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
