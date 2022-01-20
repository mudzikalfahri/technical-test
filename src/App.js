import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Post from "./pages/post/Post";
import Profile from "./pages/profile/Profile";
import Users from "./pages/users/Users";
import Saved from "./pages/saved/Saved";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post" element={<Home />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/user" element={<Users />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Layout>
  );
}

export default App;
