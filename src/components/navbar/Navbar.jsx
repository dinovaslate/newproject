import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  return (
    <>
      <div className={styles.navbar_container}>
        <div className={`${styles.navbar_item} ${styles.navbar_item_logo}`}>
          <FontAwesomeIcon icon={faBars} className={styles.bars} />
          <div className={styles.boxedText}>G</div>
          <div className={styles.header}>Hoxye</div>
        </div>
        <div className={`${styles.navbar_item} ${styles.searchbar_container}`}>
          <div className={styles.relative}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.searchbar_logo}
            />
            <input
              type="text"
              className={styles.searchbar_input}
              placeholder="Find a Match"
            />
          </div>
        </div>
        <div className={`${styles.navbar_item} ${styles.action}`}>
          <div className={`${styles.button} ${styles.button_red}`}>Login</div>
          <div className={`${styles.button} ${styles.button_reddark}`}>
            Register
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
