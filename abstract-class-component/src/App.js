import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import AddExpense from './Components/AddExpense/AddExpense';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/addExpense' element={<AddExpense/>}/>
      </Routes>   
      </BrowserRouter>
    
 
        
    </div>
  );
}

export default App;
