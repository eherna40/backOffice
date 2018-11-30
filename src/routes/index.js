import Home from "../containers/Home";
import Shops from "../containers/Shops";


var indexRoutes = [
  { path: "/", exact: true, name: "Home", component: Shops},
  // { path: "/users", exact: true, name: "Users", component: Users},
  // { path: "/locals", exact: true, name: "Users", component: Locals},
  // { path: "/locals/new", exact: false, name: "Users", component: Locals},
  // { path: "/locals/profile/:id", exact: false, name: "Profile", component: Profile},
];

export default indexRoutes;
