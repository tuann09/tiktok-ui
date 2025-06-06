import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Header from "~/layouts/components/Header";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
import ContentVideo from "../components/ContentVideo";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <main className={cx("content")}>{children}</main>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
