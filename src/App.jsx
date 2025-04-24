import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Features from "./pages/Features"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
