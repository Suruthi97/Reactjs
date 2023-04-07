
// import './App.scss';
import './Styles/Profile.scss';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Registration from './Screens/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileDetails from "./Screens/ProfileDetails";


function App() {
  return (
    <div> 
      <BrowserRouter>
      {/* <Dashboard/> */}
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/ProfileDetails" element={<ProfileDetails/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        {/* <Route path="/DragDrop" element={<Main/>}/> */}
        
      </Routes> 

      </BrowserRouter>    
     
    </div>
  );
}

export default App;
