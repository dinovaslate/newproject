import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartLine,
  faGamepad,
  faUsers,
  faCalendar,
  faCommentDots,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./sidebar.module.scss";

const Sidebar = (props) => {
  return (
    <>
      <div className={`${styles.sidebar_container}`}>
        <div className={styles.sidebar_content}>
          <div className={styles.primary}>
            <div className={styles.divider}>
              <span>Primary</span>
            </div>
            <div className={`${styles.sidebar_item} ${styles.active}`}>
              <FontAwesomeIcon className={styles.logo} icon={faHouse} />
              Home
            </div>
            <div className={`${styles.sidebar_item} `}>
              <FontAwesomeIcon className={styles.logo} icon={faChartLine} />
              Trending
            </div>
            <div className={`${styles.sidebar_item} `}>
              <FontAwesomeIcon className={styles.logo} icon={faGamepad} />
              Match
            </div>
            <div className={`${styles.sidebar_item} `}>
              <FontAwesomeIcon className={styles.logo} icon={faUsers} />
              Friends
            </div>
            <div className={`${styles.sidebar_item} `}>
              <FontAwesomeIcon className={styles.logo} icon={faCalendar} />
              Schedule
            </div>
            <div className={`${styles.sidebar_item} `}>
              <FontAwesomeIcon className={styles.logo} icon={faCommentDots} />
              Messages
            </div>
          </div>
          <div className={styles.secondary}>
            <div className={styles.divider}>
              <span>Secondary</span>
            </div>
            <div className={`${styles.sidebar_item} `}>
              <FontAwesomeIcon className={styles.logo} icon={faGear} />
              Settings
            </div>
            <div className={`${styles.sidebar_item} `}>
              <FontAwesomeIcon
                className={styles.logo}
                icon={faArrowRightFromBracket}
              />
              Logout
            </div>
          </div>
        </div>
        <div className={styles.sidebar_footer}></div>
      </div>
    </>
  );
};

export default Sidebar;
