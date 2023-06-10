import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import Layout from "./layout";
import "./layout.css";
import Login from "./Login";
import Signup from "./Signup";
import StudentInfoPage from "./Student info";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Homepage" index element={<Homepage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Student info" element={<StudentInfoPage />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);