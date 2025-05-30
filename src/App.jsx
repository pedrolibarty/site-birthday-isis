import { Toaster } from "react-hot-toast";
import { Global } from "./styles/global";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Global />
      <AppRoutes />
    </>
  );
}

export default App;
