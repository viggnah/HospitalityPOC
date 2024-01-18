import Navigation from "./pages/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import { AuthProvider } from "@asgardeo/auth-react";
import { AsgardeoConfig } from "./constants/links";

function App() {
  return (
    <div className="App">
      <AuthProvider config={AsgardeoConfig} >
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route path="/reservations" element={<Reservations />} ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
