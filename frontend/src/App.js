import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/User/LogIn.js';
import SignUp from './components/User/SignUp.js';
import Home from './components/Layout/Home.js';

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/login' element={<LogIn/>}  />
            <Route path='/register' element={<SignUp/>}  />
        </Routes>
    </div>
  );
}

export default App;
