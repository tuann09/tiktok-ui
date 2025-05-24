import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <img
                    className={cx("avatar")}
                    src="https://i.pinimg.com/736x/7f/72/a5/7f72a57208a3a9798356df761fe98715.jpg"
                    alt=""
                ></img>
                <Button primary>Follow</Button>
            </header>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>winter.aespa</strong>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCircleCheck}
                    />
                </p>
                <p className={cx("name")}>Kim Min-jeong</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>100M </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>100M </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
