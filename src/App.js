
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import{BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <main className="form-signin">
        
            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </main>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
