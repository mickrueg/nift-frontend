// Import Components

// Import React Depencies
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/StartPage/Login/Login";
import Start from "./components/StartPage/Start/Start";

export const AppContext = createContext();

function App() {
  
  const [waveMotion, setWaveMotion] = useState('')
  
  return (
    <div className="App">
      <AppContext.Provider value={{
        waveMotion, setWaveMotion
      }}>
        <div className="logo-text">
          NiFT
        </div>
        <Routes>
          <Route path="/*" element={<Start />} />
          <Route path="/start" element={<Start />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;