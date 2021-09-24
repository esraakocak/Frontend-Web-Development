import React, { useContext } from "react";
import Card from "../../components/card";
import HomeContext from "../../contexts/HomeContext";

export default function Home() {
  const { mainInfos } = useContext(HomeContext);
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      {mainInfos.map((item, key) => (
        <Card key={key} item={item} />
      ))}
    </div>
  );
}