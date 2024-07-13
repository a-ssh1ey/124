import Button from "../Button/Button";
import React from "react";
import styles from "./Footer.module.css";

function Footer({setActive, selected}) {
  return (
    <footer className={styles.footer}>
      <Button text="Join a deal" inactive onclick={() => setActive(1)} disabled={selected === 1}/>
      <Button text="Create a deal" inactive onclick={() => setActive(2)} disabled={selected === 2}/>
      <Button text="Pending deals" inactive onclick={() => setActive(3)} disabled={selected === 3}/>
    </footer>

  );
}

export default Footer;
