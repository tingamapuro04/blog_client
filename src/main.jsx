import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import NavBar from './components/Header.jsx'
import Post from './components/Post.jsx';
import Posts from './components/Posts.jsx';
import Signup from './components/Signup.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/signup" element={ <Signup /> }></Route>
      <Route path="/" element={<App />}></Route>
      <Route path="/:user_id/posts/:post_id" element={<Post />}></Route>
      <Route path="/:user_id/posts" element={<Posts />}></Route>
    </Routes>
  </Router>
);
