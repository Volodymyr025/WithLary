import { Outlet } from "react-router-dom";
import NavMenu from "../UI/NavMenu";

const Root = () => {
  return (
    <>
      <NavMenu></NavMenu>

      <Outlet></Outlet>
    </>
  );
};

export default Root;
