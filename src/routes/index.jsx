import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Error from "../pages/Error";
import Manager from "../pages/Manager";
import GuestGroups from "../pages/Teste";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/guest/:id_guest" element={<Main />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
      <Route path="/admin" element={<Manager />} />
      {/*<Route path="/admin" element={<GuestGroups />} />*/}
    </Routes>
  );
}
