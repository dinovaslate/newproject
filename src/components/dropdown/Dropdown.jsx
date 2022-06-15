import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ children, defaultChild, simple }) => {
  const [open, setOpen] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const [activeChild, setActiveChild] = useState("");
  const menuRef = useRef();
  const dropDownRef = useRef();
  const removeEvent = useCallback((e) => {
    if (!dropDownRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);
  useEffect(() => {
    const numberOfChildren = menuRef.current.children.length;
    const childrens = menuRef.current.children;
    for (const child of childrens) {
      child.addEventListener("click", (e) => {
        setActiveChild(e.currentTarget.textContent);
        setOpen(false);
      });
    }
    defaultChild === undefined
      ? setActiveChild(childrens[0].textContent)
      : setActiveChild(defaultChild);
    setChildrenCount(numberOfChildren);
    document.body.addEventListener("click", removeEvent);
    return () => {
      document.body.removeEventListener("click", removeEvent);
    };
  }, []);
  useEffect(() => {
    const childrens = menuRef.current.children;
    for (const child of childrens) {
      child.style.setProperty("--bg", "none");
      child.style.setProperty("--text", "black");
      if (child.textContent === activeChild) {
        child.style.setProperty("--bg", "#5c5b5b");
        child.style.setProperty("--text", "white");
        console.log(child.textContent === activeChild);
      }
    }
  }, [activeChild]);

  return (
    <>
      <div className={styles.dropdown} ref={dropDownRef}>
        <div
          className={`${styles.dropdown_box} ${open && styles.active} ${
            styles.simple
          }`}
          onClick={() => setOpen((status) => !status)}
        >
          <div className={styles.dropdown_header}>{activeChild}</div>
          <div className={styles.dropdown_arrow}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        <div
          ref={menuRef}
          className={`${styles.dropdown_menulist} ${open && styles.active}`}
          style={{ "--maxHeight": `${childrenCount * 42}px` }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
