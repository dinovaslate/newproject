import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import styles from "./app.module.scss";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
