import {
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
// import { Provider } from 'react-redux';

// Import Pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginPengurus from './components/Cards/Login/LoginPengurus';
import DataWarga from './pages/CardWarga';

// Styles
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';

function App() {
  return (
    // <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-pengurus" element={<LoginPengurus />} />
          <Route path="/pendataan" element={<DataWarga />} />
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
