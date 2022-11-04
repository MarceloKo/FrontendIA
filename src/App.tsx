import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/page/Dashboard"
import Gestao from "./pages/Dashboard/Gestao"
import Inicio from "./pages/Dashboard/Inicio"
import Relatorio from "./pages/Dashboard/Relatorio"
import Login from "./pages/Login"

function App() {
  console.log('teste22')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={
          <Dashboard>
            <Inicio />
          </Dashboard>}
        />

        <Route path="/dashboard/relatorio" element={
          <Dashboard>
            <Relatorio />
          </Dashboard>}
        />

        <Route path="/dashboard/gestao" element={
          <Dashboard>
            <Gestao />
          </Dashboard>}
        />

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
