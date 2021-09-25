import { nanoid } from "nanoid";

import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    billsMoney: 100000000000,
    items: [
      {
        id: nanoid(),
        title: "Factory",
        price: 11000000,
        img: "https://www.freepngimg.com/thumb/machine/55396-5-factory-free-download-image.png",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Boeing 747",
        price: 150000000,
        img: "https://neal.fun/spend/images/boeing-747.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Skyscraper",
        price: 750000000,
        img: "https://neal.fun/spend/images/skyscraper.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Cruise Ship",
        price: 950000000,
        img: "https://neal.fun/spend/images/cruise-ship.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "NBA Team",
        price: 2250000000,
        img: "https://neal.fun/spend/images/nba-team.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Cinema Ticket",
        price: 15,
        img: "https://collegetrio.com/wp-content/uploads/2019/07/movie-tickets.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Year of Netflix",
        price: 100,
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Smartphone",
        price: 700,
        img: "https://neal.fun/spend/images/smartphone.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Acre of Farmland",
        price: 2500,
        img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Luxury Wine",
        price: 5000,
        img: "https://neal.fun/spend/images/luxury-wine.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Jet Ski",
        price: 11000,
        img: "https://neal.fun/spend/images/jet-ski.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "House",
        price: 260000,
        img: "https://neal.fun/spend/images/single-family-home.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
    ],
    receiptItems: [],
    totalReceipt: 0,
    moneyValueArr: [100000000000, 100000000000],
  },
  reducers: {
    changeOrder: (state, action) => {
      const { id, price, targetvalue } = action.payload;
      const oldQuantity = state.items.find((item) => item.id === id).quantity;
      const diff = oldQuantity - targetvalue;
      const buy = diff < 0 ? true : false;

      if ((buy && state.billsMoney - price * Math.abs(diff) >= 0) || !buy) {
        if (targetvalue > 0) {
          const updatedItems = state.items.map((item) => (item.id === id ? { ...item, anyBuyed: true, quantity: targetvalue } : item));
          state.items = updatedItems;
        } else {
          const updatedItems = state.items.map((item) => (item.id === id ? { ...item, anyBuyed: false, quantity: targetvalue } : item));
          state.items = updatedItems;
        }

        const itemForReceipt = state.items.find((item) => item.id === id);
        const itemInReceipt = state.receiptItems.find((item) => item.id === id);

        if (itemInReceipt === undefined) {
          state.billsMoney -= price * targetvalue;
        } else if (itemForReceipt.quantity > itemInReceipt.quantity) {
          state.billsMoney -= price * Math.abs(diff);
        } else if (itemForReceipt.quantity < itemInReceipt.quantity) {
          state.billsMoney += price * Math.abs(diff);
        }

        state.moneyValueArr.push(state.billsMoney);
        state.moneyValueArr.shift();

        const itemDahaOnceAlindiMi = state.receiptItems.find((item) => item.id === id);

        if (itemDahaOnceAlindiMi === undefined) {
          state.receiptItems.push(itemForReceipt);
        } else {
          const updatedReceipt = state.receiptItems.map((item) => (item.id === id ? { ...item, quantity: targetvalue } : item));
          state.receiptItems = updatedReceipt;
        }

        let total = 0;

        state.receiptItems.map((item) => (total += item.quantity * item.price));
        state.totalReceipt = total;

        const updateBuyMore = state.items.map(
          (item) =>
            item && {
              ...item,
              canBuyMore: item.price > state.billsMoney ? false : true,
            }
        );
        state.items = updateBuyMore;
      }
    },
  },
});

export const { changeOrder } = cardsSlice.actions;
export default cardsSlice.reducer;