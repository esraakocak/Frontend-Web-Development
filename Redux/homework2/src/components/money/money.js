import React from "react";

import styles from "./styles.module.css";

import { useSelector } from "react-redux";

import CountUp from "react-countup";

function Money() {
  const moneyvalue = useSelector((state) => state.cards.billsMoney);
  const oldvalue = useSelector((state) => state.cards.moneyValueArr[0]);

  return (
    <div className={styles.moneyContainer}>
      <CountUp start={oldvalue} end={moneyvalue} duration={1} prefix="$ " separator=" " />
    </div>
  );
}

export default Money;