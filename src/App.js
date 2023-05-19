import { Route, Routes } from "react-router-dom";
import "./App.css";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
