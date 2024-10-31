import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ReferalPage from "./pages/referal.page";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Navigate to="/referral" />} />
      <Route element={<Layout />}>
        <Route path="/referral" element={<ReferalPage />} />
      </Route>
    </Routes>
  </>;
}

export default App;
