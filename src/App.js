import RondomTdk from "./pages/RondomTdk";
import { Routes, Route, Link } from "react-router-dom";
import Proverbs from "./components/Proverbs";
import Idiom from "./components/Idiom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RondomTdk />} />
        <Route path="/proverbs" element={<Proverbs />} />
        <Route path="/idiom" element={<Idiom/> } />
      </Routes>
    </div>
  );
}

export default App;
