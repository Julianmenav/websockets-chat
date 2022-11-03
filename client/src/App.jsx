import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import RoomForm from "./components/RoomForm";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<RoomForm />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<RoomForm />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
