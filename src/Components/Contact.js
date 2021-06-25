import React, { useState } from "react";
import { db } from "./firebase";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const [nameError, setNameError] = useState("Name is empty");
  // const [emailError, setEmailError] = useState("");
  // const [messageError, setMessageError] = useState("");

  if (data) {
    var contactName = data.name;
    var city = data.address.city;
    var state = data.address.state;
    var country = data.address.country;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = (e) => {
    e.preventDefault();

    db.collection("messages")
      .add({
        name: name,
        subject: subject,
        email: email,
        message: message,
      })
      .then(() => {
        alert(
          "Thank you for contacting me. I'll try to reach out to you asap! 🙌"
        );
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  value={subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button onClick={submitForm} type="submit" className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact Details</h4>
            <p className="address">
              {contactName}
              <br />
              Email: {contactEmail}
              <br />
              Address: {city}, {state}, {country} {zip}
              <br />
              <span> Phone: {phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
