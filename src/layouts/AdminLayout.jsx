import { Outlet } from "react-router-dom";
// import { CSSTransition, SwitchTransition } from "react-transition-group";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import NavLink from "../common/NavLink";
import IconBtn from "../common/IconBtn";

import { logOut } from "../slices/adminAuthSlice";

function Component() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentOutlet = useOutlet();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/admin");
  };

  return (
    <div className="flex flex-row">
      <div className="w-[25%] h-[100vh] bg-[#0e1225] items-center flex flex-col py-4">
        <div className="py-2">
          <img
            src="https://leimao.github.io/img/author_images/Lei-Bio-Medium.jpg"
            alt=""
            className="w-[128px] h-[128px] rounded-full mx-auto block"
          />
        </div>
        <div className="flex w-full flex-col">
          <NavLink to={""}>Overview</NavLink>
          <NavLink to={"catgories"}>Catgories</NavLink>
          <NavLink to={"posts"}>Posts</NavLink>
        </div>
        <span className="flex-1 bock"></span>
        <IconBtn
          onClick={handleLogOut}
          icon={faArrowRightFromBracket}
          color={"white"}
        />
      </div>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="zoom"
          unmountOnExit
        >
          {(state) => currentOutlet}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default Component;
