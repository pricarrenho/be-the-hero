import { Route, Routes as RouteLib } from "react-router-dom";
import { RegisterNewCase } from "../pages/ RegisterNewCase";
import { Registration } from "../pages/ Registration";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Login />} />
      <Route path="registration/*" element={<Registration />} />
      <Route path="home/*" element={<Home />} />
      <Route path="register-new-case/*" element={<RegisterNewCase />} />
    </RouteLib>
  );
};
