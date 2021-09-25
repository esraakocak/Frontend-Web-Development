import React from "react";

import styles from "./styles.module.css";

import { useSelector, useDispatch } from "react-redux";

import { changeOrder } from "../../redux/cards/cardsSlice";

function Cards() {
  const dispatch = useDispatch();
  const myitems = useSelector((state) => state.cards.items);

  const handleChange = (item, targetvalue) => {
    const id = item.id;
    const price = item.price;
    const innerHTML = targetvalue.innerHTML;

    if (targetvalue > 9999) {
      return;
    }

    if (innerHTML === "Buy") {
      targetvalue = Number(item.quantity) + 1;
    } else if (innerHTML === "Sell") {
      targetvalue = Number(item.quantity) - 1;
    } else {
      targetvalue = Number(targetvalue);
    }
    dispatch(changeOrder({ id, price, targetvalue }));
  };

  return (
    <div className={styles.gridContainer}>
      {myitems.map((item, index) => (
        <div className={styles.carddiv} key={index}>
          <img src={item.img} alt={item.titlei} />
          <p className={styles.cardTitle}>{item.title}</p>
          <p className={styles.cardPrice}>$ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
          <div className={styles.buyOptionsDiv}>
            <button className={styles.sellBtn} disabled={!item.anyBuyed} onClick={(e) => handleChange(item, e.target)}>
              Sell
            </button>
            <input className={styles.priceInput} type="number" min="0" value={item.quantity} onChange={(e) => handleChange(item, e.target.value)} />
            <button className={styles.buyBtn} disabled={!item.canBuyMore} onClick={(e) => handleChange(item, e.target)}>
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;