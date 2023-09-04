import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contact</h2>
      <form className={styles.form} method="POST" action="https://getform.io/f/7ab7801f-f81e-4bf3-9fbf-812eaf4009be">
        <label htmlFor="Name">Name</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label htmlFor="Email">Email</label>
        <input id="Email" name="Email" type="Email" className={styles.input}></input>
        <label htmlFor="Message">Message</label>
        <textarea id="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
