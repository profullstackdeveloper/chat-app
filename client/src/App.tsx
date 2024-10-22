import { Route, Routes } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import Dashboard from "./pages/home";

function App() {
  return (
    <div
      className='w-screen h-screen'
    >
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </MasterLayout>
    </div>
  );
}

export default App;
