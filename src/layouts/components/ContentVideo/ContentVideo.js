import classNames from "classnames/bind";
import styles from "./ContentVideo.module.scss";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import { FollowIcon } from "~/components/Icons";
import { useRef, useState, useEffect } from "react";
import ControlVolume from "./ControlsVolume";
const cx = classNames.bind(styles);
function ContentVideo() {
    const [showPlayIcon, setShowPlayIcon] = useState(false);
    const [playStatusIcon, setPlayStatusIcon] = useState(null);
    const videoRef = useRef(null);
    const timeoutRef = useRef(null);
    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);
    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            setPlayStatusIcon("play");
            video.play();
        } else {
            setPlayStatusIcon("pause");
            video.pause();
        }
        setShowPlayIcon(true);
        // Clear timeout cũ
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        // Lấy timeout id
        timeoutRef.current = setTimeout(() => {
            setShowPlayIcon(false);
        }, 500);
    };
    // Có thể bố sung thêm đoạn này: cleanup timeout để tránh rò rỉ bộ nhớ

    return (
        <article className={cx("wrapper")}>
            <div className={cx("post-video")}>
                <section className={cx("card-video")} onClick={togglePlay}>
                    <div className={cx("video-player-container")}>
                        <div className={cx("div-container")}>
                            <video
                                ref={videoRef}
                                src="./video.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className={cx("video")}
                            ></video>
                            {showPlayIcon && (
                                <div className={cx("play-icon-overlay")}>
                                    {playStatusIcon === "play" ? (
                                        <svg
                                            width="60"
                                            height="60"
                                            viewBox="0 0 48 48"
                                            fill="white"
                                        >
                                            <path d="M16 10v28l22-14L16 10z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="60"
                                            height="60"
                                            viewBox="0 0 48 48"
                                            fill="white"
                                        >
                                            <path d="M18 10h6v28h-6zM28 10h6v28h-6z" />
                                        </svg>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className={cx("media-top")}>
                            <div className={cx("audio-wrapper")}>
                                <ControlVolume />
                                <div className={cx("")}></div>
                            </div>
                        </div>
                        <div className={cx("media-bottom")}></div>
                        <div className={cx("video-progress-container")}></div>
                    </div>
                </section>
                <section className={cx("action-bar")}>
                    <div className={cx("avatar-post")}>
                        <Link className={cx("avatar-profile")}>
                            <Image
                                className={cx("user-avatar")}
                                src="https://i.pinimg.com/736x/e4/87/b8/e487b829f18d56dd9bdd7b7acbfcbd4f.jpg"
                                alt="Nguyen Van A"
                            />
                        </Link>
                        <FollowButton />
                    </div>
                </section>
            </div>
        </article>
    );
}

export default ContentVideo;
