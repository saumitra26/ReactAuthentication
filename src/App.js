
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import{BrowserRouter,Route} from 'react-router-dom'
import {useState,useEffect} from 'react'

function App() {
  const[name,setName]=useState('')
    useEffect(()=>{
    ( async()=>{
        const response= await fetch('http://localhost:5000/api/auth/user/',{
             credentials:'include',
             headers: ({
                 'Content-Type': 'application/json'}),
         });
         const content=await response.json();
         setName(content.name);
     }
     )();
       
    },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Nav name={name} setName={setName}/>
        <main className="form-signin">
        
            <Route path="/" exact component={()=> <Home name={name}/>}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </main>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
