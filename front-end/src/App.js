import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login.js';
import { AdminDashbOard} from './components/admin/admin_dashboard.js';
import { UserPage } from './components/user/user_page.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminDashbOard />} />


       
      </Routes>
    </Router>

  );
}

export default App;