import './Styles/Profile.css';
import Registration from './Screens/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileDetails from "./Screens/ProfileDetails";
function App() {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/ProfileDetails" element={<ProfileDetails/>}/>
      </Routes>   
    </div>
  );
}

export default App;
