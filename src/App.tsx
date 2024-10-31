import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ReferalPage from "./pages/referal.page";
import FollowingPage from "./pages/following.page";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Navigate to="/referral" />} />
      <Route element={<Layout />}>
        <Route path="/referral" element={<ReferalPage />} />
        <Route path="/following" element={<FollowingPage />} />
        <Route path="/launcher" />
        <Route path="/farming" />
        <Route path="/buy" />
      </Route>
    </Routes>
  </>;
}

export default App;
