import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Start from './Components/Start/Start'
import Portfolio from './Container/Portfolio/Portfolio'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Start}/>
        <Route exact path='/portfolio' component={Portfolio}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
