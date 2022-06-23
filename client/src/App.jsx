import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomThemeProvider from './components/CustomThemeProvider'
import Home from './pages/HomePage';
import About from './pages/About';
import Login from './pages/LoginPage';
import ConnectionGroups from './pages/ConnectionGroups';
import SignUp from './pages/SignUpPage';
import './App.css';





function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/groups' element={<ConnectionGroups />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </CustomThemeProvider>
    </BrowserRouter>

  );
}

export default App;
