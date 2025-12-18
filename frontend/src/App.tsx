import './App.css'
import { BrowserRouter } from 'react-router-dom';
import UserRouter from './routes/user.router';
import { AuthProvider } from './context/authContex';
 import { ToastContainer } from 'react-toastify';

function App() {

  return (
    
    <BrowserRouter>
      <AuthProvider>
       <UserRouter/>
       <ToastContainer/>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App
