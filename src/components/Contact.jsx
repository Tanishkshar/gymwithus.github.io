import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>CONTACT HERE</h1>
      <form>
        <input type="text" placeholder="full name" required />
        <ipnut type="email" placeholder="Type your Email" required />
        <textarea placeholder="write here.." name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
