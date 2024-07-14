import RondomTdk from "./pages/RondomTdk";
import { Routes, Route } from "react-router-dom";
import Proverbs from "./components/Proverbs";
import Idiom from "./components/Idiom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RondomTdk />} />
        <Route path="/proverbs" element={<Proverbs />} />
        <Route path="/idiom" element={<Idiom />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
