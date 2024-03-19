import './App.css'
import { Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { Profile } from './components/Profile'
import { Settings } from './components/Settings'
import { TaskDetails } from './components/TaskDetails'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        {/* useNavigate */}
        <Route path='/login' element={<Login />}/>
        {/* nested routes */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>
        {/* dinamic routes */}
        <Route path='/tasks/:taskId' element={<TaskDetails />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
