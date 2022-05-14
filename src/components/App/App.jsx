import './App.css';
import Router from '../Router/Router';
import { UserContextProvider } from '../../contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;
