import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="services" element={<h1>Services</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
