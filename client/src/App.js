import { BrowserRouter as Router } from 'react-router-dom';
import './styles/style.scss';
import AppContextProvider from './contexts/AppContextProvider';
import Main from './Main';

function App() {
  return (
    <Router>
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </Router>
  );
}

export default App;
