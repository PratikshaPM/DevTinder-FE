import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<MainContainer />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
