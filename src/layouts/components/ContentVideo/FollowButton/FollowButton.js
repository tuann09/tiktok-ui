import classNames from "classnames/bind";
import styles from "../ContentVideo.module.scss";
import { useState } from "react";
import { FollowActiveIcon, FollowIcon } from "~/components/Icons";
const cx = classNames.bind(styles);
function FollowButton({}) {
    const [isFollowed, setIsFollowed] = useState(false);

    const handleClick = () => {
        setIsFollowed(!isFollowed);
    };

    return (
        <button
            className={cx("follow-btn", { followed: isFollowed })}
            onClick={handleClick}
        >
            {isFollowed ? <FollowActiveIcon /> : <FollowIcon />}
        </button>
    );
}

export default FollowButton;
