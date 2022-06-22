import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomThemeProvider from './components/CustomThemeProvider'
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import './App.css';





function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </CustomThemeProvider>
    </BrowserRouter>

  );
}

export default App;
