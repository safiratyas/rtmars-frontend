import {
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

// Import Pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginPengurus from './pages/LoginPengurus';
import DataWarga from './pages/CardWarga';
import DataPengurus from './pages/CardPengurus';
import DataSurat from './pages/CardSurat';
import DataProfile from './pages/Profile';
import DataDokumen from './pages/ListDokumen';
import FormData from './pages/FormData';
import SuratWarga from './pages/FormSurat';
import Agenda from './pages/Agenda';
import DashboardAdmin from './pages/DashboardAdmin';

// Styles
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-pengurus" element={<LoginPengurus />} />
          <Route path="/pendataan/warga" element={<DataWarga />} />
          <Route path="/pendataan/pengurus" element={<DataPengurus />} />
          <Route path="/pendataan/surat" element={<DataDokumen />} />
          <Route path="/pendataan/surat/:id" element={<DataSurat />} />
          <Route path="/input/warga" element={<FormData />} />
          <Route path="/input/surat" element={<SuratWarga />} />
          <Route path="/input/profile" element={<DataProfile />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
