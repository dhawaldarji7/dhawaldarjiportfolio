import React from "react";
import { useFormik } from "formik";
import { db } from "./firebase";
import * as yup from "yup";

const Contact = ({ data }) => {
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

  const submitForm = (values, formik) => {
    console.log(values);

    db.collection("messages")
      .add({
        name: values.contactName,
        email: values.contactEmail,
        subject: values.contactSubject,
        message: values.contactMessage,
      })
      .then(() => {
        alert(
          "Thank you for contacting me. I'll try to reach out to you asap! 🙌"
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
    },

    validationSchema: yup.object({
      contactName: yup
        .string()
        .min(3, "Name should contain atleast three characters")
        .max(25, "Name can only have 25 characters")
        .required("Name is required"),

      contactEmail: yup.string().email().required("Email is required"),

      contactSubject: yup
        .string()
        .min(5, "Subject should contain atleast 5 characters")
        .max(30, "Subject can only have 30 characters"),

      contactMessage: yup
        .string()
        .min(40, "Min message length required is 40 characters")
        .max(350, "Message can only be 350 characters long")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      submitForm(values);
      resetForm();
    },
  });

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <div className="fieldStatus">
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactName}
                  />
                  {formik.touched.contactName && formik.errors.contactName ? (
                    <span className="errorAlert">
                      {formik.errors.contactName}
                    </span>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <div className="fieldStatus">
                  <input
                    id="contactEmail"
                    name="contactEmail"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactEmail}
                  />
                  {formik.touched.contactEmail && formik.errors.contactEmail ? (
                    <span className="errorAlert">
                      Email address is not valid
                    </span>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <div className="fieldStatus">
                  <input
                    id="contactSubject"
                    name="contactSubject"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactSubject}
                  />
                  {formik.touched.contactSubject &&
                  formik.errors.contactSubject ? (
                    <span className="errorAlert">
                      {formik.errors.contactSubject}
                    </span>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <div className="fieldStatus">
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    placeholder="Type your message here"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactMessage}
                  ></textarea>
                  {formik.touched.contactMessage &&
                  formik.errors.contactMessage ? (
                    <span className="errorAlert">
                      {formik.errors.contactMessage}
                    </span>
                  ) : null}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={
                    !(formik.errors && formik.isValid) ? "disabled" : "submit"
                  }
                  disabled={!(formik.errors && formik.isValid)}
                >
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
