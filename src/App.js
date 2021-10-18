import { BrowserRouter,Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="login/*" />
          <Route element={<ProtectedRoute>
            <User />
          </ProtectedRoute>} path="conta/*" />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
