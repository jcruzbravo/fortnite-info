import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./container/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <main>
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
              <Route path="/shop" element={<h1>Hola, soy la tienda</h1>} />
              <Route path="/map" element={<h1>Hola, soy el mapa</h1>} />
              <Route path="/challenges" element={<h1>Hola, soy el mapa</h1>} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
