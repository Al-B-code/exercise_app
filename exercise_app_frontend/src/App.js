import logo from './logo.svg';
import './App.css';
import AuthProvider from './provider/AuthProvider';
import Routes from './routes';
import UserContext from './contexts/UserContext';
import { UserProvider } from './contexts/UserContext';
import { useState } from 'react';



function App() {

  const [user, setUser] = useState(null);


  return (
    <>
    <UserProvider>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </UserProvider>
    </>
  );
}

export default App;
