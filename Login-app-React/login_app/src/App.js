
import './App.css';

import Login from './Screen/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Screen/Register';
import Homescreen from './Screen/Homescreen';

function App() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Welcome to My Web Page</h1>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/home' element={<Homescreen/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
