import React from "react";

import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates" />
      <h1>Spend Bill Gates' Money</h1>
    </div>
  );
}

export default Header;