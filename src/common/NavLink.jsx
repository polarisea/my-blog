import { NavLink } from "react-router-dom";

function Component({ children, to }) {
  return (
    <NavLink to={to} className={"normal-navlink"}>
      {children}
    </NavLink>
  );
}

export default Component;
