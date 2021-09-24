import { useFormik } from "formik";
import React, { useState } from "react";

export default function Card({ item }) {
  const [vki, setVki] = useState(null);
  const [situation, setSituation] = useState("");
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      size: 180,
      weight: 70,
    },
    onSubmit: (values) => {
      let size = values.size,
        weight = values.weight,
        result;
      result = weight / ((size * size) / 10000);
      result <= 18.5
        ? setSituation("Düşük Kilolu")
        : result > 18.5 && result <= 24.9
        ? setSituation("Normal Kilolu")
        : result >= 25 && result <= 29.9
        ? setSituation("Fazla Kilolu")
        : result >= 30 && result < 40
        ? setSituation("Obez")
        : result >= 40
        ? setSituation("Aşırı Obez")
        : setSituation("Hesaplanamadı");
      return setVki(result);
    },
  });
  return (
    <div
      style={{
        width: "275px",
        height: "500px",
        backgroundColor: "#F5FDB0",
        borderRadius: "5px",
        margin: "25px",
        padding: "15px",
      }}
    >
      <h3 style={{ color: "#FF4848" }}>{item.title}</h3>
      <p
        style={{
          marginTop: "25px",
          textAlign: "left",
          margin: "auto",
          color: "#F037A5",
          fontSize: "18px",
          fontWeight: "inherit",
          fontFamily: "fantasy",
        }}
      >
        {item.description}
      </p>
      {item.title === "Vücut Kitle Endeksi Hesapla" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "30px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="size">Boy </label>
            <input
              style={{}}
              name="size"
              placeholder="180"
              type="number"
              value={values.size}
              onChange={handleChange}
              style={{
                margin: "10px",
                width: "150px",
                height: "25px",
                borderRadius: "5px",
                borderWidth: "0px",
              }}
            />
            <br />
            <label htmlFor="size">Kilo </label>
            <input
              name="weight"
              placeholder="70"
              type="number"
              value={values.weight}
              onChange={handleChange}
              style={{
                margin: "10px",
                width: "150px",
                height: "25px",
                borderRadius: "5px",
                borderWidth: "0px",
              }}
            />
            <br />
            <button
              style={{
                borderColor: "#F5FDB0",
                backgroundColor: "#F5FDB0",
                marginTop: "10px",
                fontSize: "16px",
                width: "100px",
                height: "30px",
                cursor: "pointer",
              }}
              type="submit"
            >
              Hesapla
            </button>
          </form>
        </div>
      ) : null}
      {vki && (
        <div style={{ marginTop: "20px" }}>
          {parseFloat(vki).toFixed(1)}
          <br />
          {situation}
        </div>
      )}
    </div>
  );
}