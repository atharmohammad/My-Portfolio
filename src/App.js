import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Start from './Components/Start/Start'
import Resume from './Components/Resume/Resume'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Start}/>
        <Route exact path='/resume' component={Resume}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
