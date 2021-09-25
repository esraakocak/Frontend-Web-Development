import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { markdownPreviewer } from "../redux/markdownSlice";

import styles from "./HomeRtl.module.scss";

function Text() {
  const dispatch = useDispatch();

  const prev = useSelector((state) => state.markdown.preview);

  const [text, setText] = useState("");

  dispatch(markdownPreviewer(text));

  return (
    <>
      {prev && (
        <div
          className={styles.rectangle1}
          style={{
            overflow: "scroll",
          }}
        >
          <span>
            Heading <br />
            ======= <br /> <br />
            Sub-heading <br />
            ----------- <br />
            <br />
            ### Another deeper heading <br />
            <br />
            Paragraphs are separated <br />
            by a blank line. <br />
            <br />
            Leave 2 spaces at the end of a <br />
            line to do a line break <br />
            <br />
            Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .
            <br />
            <br />
            Shopping list: <br />
            * apples <br />* oranges <br />* pears <br />
            <br />
            Numbered list: <br />
            1. apples <br />
            2. oranges <br />
            3. pears <br /> <br />
            The rain---not the reign---in Spain. <br />
            <br />
            *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
          </span>
        </div>
      )}

      {!prev && (
        <textarea
          className={styles.rectangle1}
          placeholder="Enter text.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      )}
    </>
  );
}

export default Text;