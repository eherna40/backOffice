import Shops from "../containers/Shops";
import Login from "../containers/Login";


var indexRoutes = [
  { path: "/shop", exact: true, name: "Home", component: Shops},
  // { path: "/locals", exact: true, name: "Users", component: Locals},
  // { path: "/locals/new", exact: false, name: "Users", component: Locals},
  // { path: "/locals/profile/:id", exact: false, name: "Profile", component: Profile},
];

export default indexRoutes;
