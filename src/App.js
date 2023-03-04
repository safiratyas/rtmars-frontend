import {
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import { Provider } from 'react-redux';

// Import Pages
import Homepage from './pages/Homepage';

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
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
