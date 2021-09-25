import React from "react";

import { useSelector } from "react-redux";

import ReactMarkdown from "react-markdown";

import styles from "./HomeRtl.module.scss";

function Preview() {
  const text = useSelector((state) => state.markdown.text);
  const textPrev = useSelector((state) => state.markdown.textPreview);

  const prev = useSelector((state) => state.markdown.preview);

  return (
    <div
      className={styles.rectangle2}
      style={{
        overflow: "scroll",
      }}
    >
      {!prev ? (
        <ReactMarkdown children={text} />
      ) : (
        <ReactMarkdown children={textPrev} />
      )}
    </div>
  );
}

export default Preview;