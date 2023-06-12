import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import DashBoard from "./routes/dashBoard/dashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<DashBoard />} />
      </Route>
    </Routes>
  );
}

export default App;
