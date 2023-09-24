import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import { Header } from './components/Header.jsx'
import Post from './components/Post.jsx';
import Posts from './components/Posts.jsx';
import Signup from './components/Signup.jsx';
import SignIn from './components/Signin.jsx';
import Home from './components/Home.jsx';
import CreatePost from './components/CreatePost.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts/:post_id" element={<Post />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/write" element={<CreatePost />}></Route>
      </Routes>
    </Router>
  </>
);
