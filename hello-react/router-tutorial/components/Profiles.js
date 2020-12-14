import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
          {/* <Link to="/profiles/velopert">velopert</Link> */}
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/kkojae">
            kkojae
          </NavLink>
          {/* <Link to="/profiles/kkojae">kkojae</Link> */}
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>사용자를 선택해 주세요.</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
