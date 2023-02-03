import Home from "./Pages/Home/Home"
import Register from "./Pages/LoginAndRegister/Register";
import Login from "./Pages/LoginAndRegister/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={'/login'} />
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="login" index element={<Login />} />
          <Route path="register" index element={<Register />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
