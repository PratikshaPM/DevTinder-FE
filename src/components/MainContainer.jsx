import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const MainContainer = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainContainer;
