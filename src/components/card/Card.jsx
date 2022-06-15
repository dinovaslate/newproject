import React from "react";
import styles from "./card.module.scss";
const Card = ({ image, children, gap, padding }) => {
  return (
    <>
      <div className={styles.card} style={{ gap: gap, padding: padding }}>
        {image !== undefined && (
          <div className={styles.card_image}>
            <img src={image} alt="" />
          </div>
        )}

        {children}
      </div>
    </>
  );
};

export default Card;
