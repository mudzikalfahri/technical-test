import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Post from "./pages/post/Post";
import Profile from "./pages/profile/Profile";
import Users from "./pages/users/Users";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post" element={<Home />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </Layout>
  );
}

export default App;
