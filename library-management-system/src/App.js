import './App.css';
import './Assests/font-awesome/css/font-awesome.min.css';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Rules from './Components/Rules/Rules';
import Price from './Components/Price/Price';
import Search from './Components/Search/Search';
import AdminHeader from './Components/AdminHeader/AdminHeader';
import AdminSearch from './Components/AdminSearch/AdminSearch';
import AddBook from './Components/AddBook/AddBook';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<><Header/><Home/></>}/>
          <Route path='/about' element={<><Header/><About/></>}/>
          <Route path='/rules' element={<><Header/><Rules/></>}/>
          <Route path='/price' element={<><Header/><Price/></>}/>
          <Route path='/search' element={<><Header/><Search/></>}/>
          <Route path='/adminHome' element={<><AdminHeader/><Home/></>}/>
          <Route path='/adminAbout' element={<><AdminHeader/><About/></>}/>
          <Route path='/adminRules' element={<><AdminHeader/><Rules/></>}/>
          <Route path='/adminPrice' element={<><AdminHeader/><Price/></>}/>
          <Route path='/adminSearch' element={<><AdminHeader/><AdminSearch/></>}/>
          <Route path='/addBook' element={<AddBook/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;