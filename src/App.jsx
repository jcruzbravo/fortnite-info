import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
import Spinner from "./components/Spinner";
const Account = lazy(() => import("./container/Account"));
const Challenges = lazy(() => import("./container/Challenges"));
const Shop = lazy(() => import("./container/Shop"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./container/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Header />
        <div className="App">
          <main>
            <div className="main-content">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/search" element={<Account/>} />
                <Route path="*" element={<NotFound />} />
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
