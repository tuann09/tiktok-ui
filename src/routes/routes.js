import config from "~/config";
import { HeaderOnly } from "~/layouts";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from "~/pages/Live";
import Discover from "~/pages/Discover";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.discover, component: Discover },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
