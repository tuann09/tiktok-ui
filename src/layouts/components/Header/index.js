import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import config from "~/config";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Button from "~/components/Button";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Search from "~/components/Search";
import Menu from "~/components/Popper/Menu";

import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English(US)",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English(UK)",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Korea",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Japan",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Ý",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English(US)",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English(UK)",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Korea",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Japan",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Ý",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English(US)",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English(UK)",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Korea",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Japan",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Ý",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Korea",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Japan",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Ý",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: "Keyboard shortcuts",
    },
];
function Header() {
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: "View profile",
            to: "/@zani",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routes.home} className={cx("logo-link")}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 50]}
                                trigger="click"
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                trigger="click"
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                trigger="click"
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://i.pinimg.com/736x/73/23/39/73233909562df67f0da23ff080e0db10.jpg "
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
