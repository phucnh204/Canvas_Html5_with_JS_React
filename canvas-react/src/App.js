import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnimatedCircle from "./pages/AnimatedCircle";
import ParallelogramCanvas from "./pages/ParallelogramCanvas";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
        <Link
          to="/animated-circle"
          style={{ marginRight: "10px", color: "white" }}
        >
          Animated Circle
        </Link>
        <Link to="/parallelogram" style={{ color: "white" }}>
          Parallelogram
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <h1 style={{ textAlign: "center" }}>Welcome to Shape Animations</h1>
          }
        />
        <Route path="/animated-circle" element={<AnimatedCircle />} />
        <Route path="/parallelogram" element={<ParallelogramCanvas />} />
      </Routes>
    </Router>
  );
}

export default App;
