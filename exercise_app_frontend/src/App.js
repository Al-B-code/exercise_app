import logo from './logo.svg';
import './App.css';
import ExerciseAppContainer from './containers/ExerciseAppContainer';
import AuthProvider from './Provider/AuthProvider';
import Routes from './routes';
import UserContext from './contexts/UserContext';


function App() {

  const [user, setUser] = useState(null);


  return (
    <>
    <UserContext.Provider value={{ user, setUser}}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </UserContext.Provider>
    </>
  );
}

export default App;
