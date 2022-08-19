import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
      </Routes>
    </Navbar>
  );
}

export default App;
