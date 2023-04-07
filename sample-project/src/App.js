import './App.scss';
import { MsalProvider} from "@azure/msal-react";
import Home from './screens/Home/home.jsx';

export default function App({ msalInstance }) {

  return (
    <MsalProvider instance={msalInstance}>
        <Home />
    </MsalProvider>

  );
}
