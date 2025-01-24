import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
