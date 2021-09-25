import React from "react";

import styles from "./styles.module.css";

import { useSelector } from "react-redux";

function Receipt() {
  const receiptItems = useSelector((state) => state.cards.receiptItems);
  const total = useSelector((state) => state.cards.totalReceipt);

  if (total && total > 0) {
    return (
      <div className={styles.receiptContainerDiv}>
        <h2>Your Receipt</h2>
        {receiptItems.map((item, index) => (
          <p className={item.quantity > 0 ? styles.receiptItemInfo : styles.hidden} key={index}>
            <span className={styles.receiptItemTitle}>{item.title}</span>
            <span className={styles.receiptItemQuantity}>x {item.quantity}</span>
            <span className={styles.receiptItemPrice}>
              $
              {Number(item.price * item.quantity)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </span>
          </p>
        ))}
        <p className={styles.totalContainer}>
          <span>TOTAL :</span>
          <span>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
        </p>
      </div>
    );
  }
  return <div></div>;
}

export default Receipt;