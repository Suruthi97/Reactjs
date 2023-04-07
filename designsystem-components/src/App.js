import './App.scss';
import './App.css';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Home from './Screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (<div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;