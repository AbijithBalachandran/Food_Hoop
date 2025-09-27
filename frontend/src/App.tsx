import './App.css'
import { BrowserRouter } from 'react-router-dom';
import UserRouter from './routes/user.router';
import { AuthProvider } from './context/authContex';


function App() {

  return (
    
    <BrowserRouter>
      <AuthProvider>
       <UserRouter/>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App
