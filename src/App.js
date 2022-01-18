import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
