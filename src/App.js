import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import DebtsPage from "./pages/DebtsPage";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="debts" element={<DebtsPage />} />
          <Route path="Transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
