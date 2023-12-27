import logo from './logo.svg';
import './App.css';
import ExerciseAppContainer from './containers/ExerciseAppContainer';
import AuthProvider from './Provider/AuthProvider';
import Routes from './routes';


function App() {
  return (
    <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </>
  );
}

export default App;
