import './App.css';
import HomeScreen from './Components/Screens/Homescreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardNew from './Components/DashboardNew';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardNew/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
