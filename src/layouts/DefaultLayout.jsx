import { NavLink, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function DefaultLayout() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  return (
    <>
      <div>
        <NavLink to={"/"}>Demo 1</NavLink>{" "}
        <NavLink to={"/demo2"}>Demo 2</NavLink>
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
    </>
  );
}

export default DefaultLayout;
