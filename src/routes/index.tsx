import { Route, Routes as RouteLib } from "react-router-dom";
import { Registration } from "../pages/ Registration";
import { List } from "../pages/List";
import { Login } from "../pages/Login";
import { NewRegistration } from "../pages/NewRegistration";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Login />} />
      <Route path="registration/*" element={<Registration />} />
      <Route path="list/*" element={<List />} />
      <Route path="new-registration/*" element={<NewRegistration />} />
    </RouteLib>
  );
};
