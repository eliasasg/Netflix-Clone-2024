
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Home/>
      </Router>      
    </div>
  );
}

export default App;
