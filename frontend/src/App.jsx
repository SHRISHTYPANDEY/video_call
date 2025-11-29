import './App.css'
import{BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/Landing.jsx';
import Authentication from './pages/Authentication.jsx';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import History from './pages/History.jsx';
import VideoMeet from './pages/VideoMeet.jsx';
function App() {
 

  return (
    <>
     <Router>
      <AuthProvider>

      <Routes>
        <Route path='/' element = {<LandingPage />} ></Route>
        <Route path='/auth' element = {<Authentication />} ></Route>
         <Route path='/history' element = {<History />} ></Route>
        <Route path='/home' element = {<Home />} ></Route>
        <Route path='/:url'  element={<VideoMeet/>}></Route>
      </Routes>
      </AuthProvider>
     </Router>
    </>
  )
}

export default App
