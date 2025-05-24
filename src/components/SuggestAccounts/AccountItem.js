import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import styles from "./SuggestAccounts.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx("preview")}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-15, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx("account-item")}>
                    <img
                        className={cx("avatar")}
                        src="https://i.pinimg.com/736x/7f/72/a5/7f72a57208a3a9798356df761fe98715.jpg"
                        alt=""
                    />
                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>winter.aespa</strong>
                            <FontAwesomeIcon
                                className={cx("check")}
                                icon={faCircleCheck}
                            />
                        </p>
                        <p className={cx("name")}>Kim Min-jeong</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
