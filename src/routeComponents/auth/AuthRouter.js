import React from "react";
import { Route, Routes } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";

function AuthRouter(props) {
  return (
    // <> é um alias (apelido) para React.Fragment
    <React.Fragment>
      <Routes>
        <Route path={`${props.match.path}/signup`} element={<Signup />} />
        <Route path={`${props.match.path}/login`} element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default AuthRouter;
