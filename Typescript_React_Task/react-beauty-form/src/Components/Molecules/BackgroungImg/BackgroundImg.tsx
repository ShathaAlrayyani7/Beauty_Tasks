import React, { SyntheticEvent } from "react";
import styles from "./backgroungImg.module.css";

type BackgroundImgProps = {
    url: string;
};

export const BackgroundImg = (props: BackgroundImgProps) => {
    
    const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
        let imgUrl =
            "https://images.hdqwalls.com/wallpapers/hatake-kakashi-naruto-anime-q5.jpg";

        e.currentTarget.onerror = null;
        e.currentTarget.src = imgUrl;
    };

    return (
        <div className={styles.backgroundImg}>
            <img
                className={styles.img}
                src={props.url}
                alt="Background Image"
                onError={handleImageError}
            />
        </div>
    );
};
