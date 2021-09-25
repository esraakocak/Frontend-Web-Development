import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function Note({ note }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [opacity, setOpacity] = useState("70%");
  return (
    <div>
      <Card
        border="dark"
        style={{
          width: "18rem",
          background: note.color,
          marginTop: "2rem",
          opacity: opacity,
        }}
      >
        <Card.Body style={{ maxHeight: "248px", overflow: "auto" }}>
          <Card.Text
            onMouseOut={() => setOpacity("70%")}
            onMouseOver={() => setOpacity("100%")}
            onClick={() => setIsFavourite(!isFavourite)}
          >
            {note.text}
          </Card.Text>
        </Card.Body>
        {isFavourite && (
          <div style={{ position: "absolute", left: 10, top: 10 }}>
            <img
              alt=""
              src="https://img.icons8.com/flat-round/64/000000/star--v1.png"
              style={{ width: 30 }}
            />
          </div>
        )}
      </Card>
    </div>
  );
}