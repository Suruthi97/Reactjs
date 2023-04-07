import './App.scss';
import Dashboard from './Screens/Dashboard';
import Shipments from './Screens/Shipments';
import Invoices from './Screens/Invoices';
import Quotations from './Screens/Quotations';
import NewQuotation from './Screens/NewQuotation';
import Shipper from './Screens/Shipper';
import Reports from './Screens/Reports';
import Login from './Screens/Login';
import Forgotpw from './Screens/Forgotpw';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Screens/Register';
function App() {
  return (<div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgotpw' element={<Forgotpw />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/shipments' element={<Shipments />} />
          <Route path='/invoices' element={<Invoices />} />
          <Route path='/quotations' element={<Quotations />} />
          <Route path='/newquotation' element={<NewQuotation />} />
          <Route path='/shipper' element={<Shipper />} />
          <Route path='/reports' element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;