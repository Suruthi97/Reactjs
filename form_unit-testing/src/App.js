import './App.css';
import Profile from './components/Profile';
import Registration from './Screens/Registration';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Dashboardcontent from './Screens/Dashboardcontent';
import Sidebarr from './components/Sidebarr';
import Topnavv from './components/Topnavv';
import Teams from './Screens/Teams';
import Projects from './Screens/Projects';
import Documents from './Screens/Documents';
import Reports from './Screens/Reports';
import Calendar from './Screens/Calendar';
function App() {
  return (
    <div>
        <Sidebarr />
        <Topnavv />
        <Routes>
          {/* <Route path='/' element={<Registration />} />  */}
          <Route path='/' element={<Dashboardcontent />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/sidebarr' element={<Sidebarr />} />

        </Routes>
    </div>
  );
}

export default App;
