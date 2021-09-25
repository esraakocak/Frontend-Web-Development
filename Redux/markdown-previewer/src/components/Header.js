import React from "react";

import { useDispatch } from "react-redux";

import { changePreview } from "../redux/markdownSlice";

import styles from "./HomeRtl.module.scss";

function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.header}>
        <p className={styles.ltrRtlMarkdownEditor}>Markdown Previewer </p>

        <button
          style={{
            background: "#2FC3D8",
            borderRadius: "4px",
            color: "white",
            width: "50px",
            height: "25px",
            border: 0,
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(changePreview())}
        >
          Help
        </button>
      </div>
    </>
  );
}

export default Header;