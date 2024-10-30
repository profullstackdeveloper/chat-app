import { Route, Routes } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import Dashboard from "./pages/home";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <div
      className='w-screen h-screen'
    >
      <AppContextProvider>
        <MasterLayout>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </MasterLayout>
      </AppContextProvider>
    </div>
  );
}

export default App;
