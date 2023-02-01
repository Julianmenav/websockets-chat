import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./pages/chat/Chat";
import RoomForm from "./pages/home/RoomForm";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/home" element={<RoomForm />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<RoomForm />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
