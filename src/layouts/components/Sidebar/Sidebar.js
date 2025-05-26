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
    DiscoverIcon,
    DiscoverActiveIcon,
} from "~/components/Icons";
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title="Đề xuất"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Khám phá"
                    to={config.routes.discover}
                    icon={<DiscoverIcon />}
                    activeIcon={<DiscoverActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Đã follow"
                    to={config.routes.following}
                    icon={<UserFollowingIcon />}
                    activeIcon={<UserFollowingActiveIcon />}
                ></MenuItem>

                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>

            <SuggestAccounts label={"Các tài khoản Đã follow"} />
        </aside>
    );
}

export default Sidebar;
