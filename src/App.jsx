import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Challenges from "./container/Challenges";
import Shop from "./container/Shop";
import NotFound from "./pages/NotFound";
const Home = lazy(() => import("./container/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner/>}>
        <Header />
        <div className="App">
          <main>
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop/>} />
                <Route
                  path="/challenges"
                  element={<Challenges/>}
                />
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </div>
          </main>
        </div>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
