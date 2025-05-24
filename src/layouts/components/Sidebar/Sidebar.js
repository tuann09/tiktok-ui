import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import SuggestAccounts from "~/components/SuggestAccounts";
import {
    HomeIcon,
    HomeActiveIcon,
    UserFollowingActiveIcon,
    LiveActiveIcon,
    UserFollowingIcon,
    LiveIcon,
} from "~/components/Icons";
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserFollowingIcon />}
                    activeIcon={<UserFollowingActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>
            <SuggestAccounts label={"Suggested Accounts"} />
            <SuggestAccounts label={"Following Accounts"} />
        </aside>
    );
}

export default Sidebar;
