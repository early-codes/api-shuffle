import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav'
import Weather from './components/Weather/Weather'
import Gifs from "./components/Gifs/Gifs"


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/weather" component={Weather} />
        <Route path="/gifs" component={Gifs} />
      </div>
    </Router>
  );
}

export default App;
