import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import AdminNotifications from  './components/AdminNotifications.jsx';
import Login from './components/Login.jsx';
import './App.css'
import {Routes,Route} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notifications" element={<AdminNotifications />} />
      </Routes>
    </>
  )
}

export default App
