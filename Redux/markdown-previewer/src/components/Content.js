import React from "react";
import styles from "./HomeRtl.module.scss";

import Text from "./Text";
import Preview from "./Preview";

function Prev() {
  return (
    <div className={styles.buttons}>
      <Text />
      <Preview />
    </div>
  );
}