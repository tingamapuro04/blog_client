import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import NavBar from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </Router>,
)
