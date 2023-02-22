import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
// Image
import Shake from "./assets/shake.png";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
        <h1>Super Shakes</h1>
        </Link>
        <ul>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Shakes</Link>
        </ul>
      </nav>
      <main>
        <h1>Make You Favorite Shakes</h1>
        <img src={Shake} alt="" className="roll-in-blurred-right"/>
      </main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
