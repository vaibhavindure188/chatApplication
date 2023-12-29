import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountContext from './context/AccountContext';
function App() {
  return (
    <GoogleOAuthProvider clientId='1016652156688-o33t5f8b5ib6al38d4vfpjb9maodp3lj.apps.googleusercontent.com'>
      <AccountContext> 
         <Messenger />
      </AccountContext> 
    </GoogleOAuthProvider>
  );
}

export default App;
