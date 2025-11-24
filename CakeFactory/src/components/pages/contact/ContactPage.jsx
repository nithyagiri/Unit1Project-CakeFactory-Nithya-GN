import { useState } from "react";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import "./contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      // TODO: send data to backend
      setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
    }
  };

  return (
    <main className="contact-page-full">
      <h1>Contact Us</h1>

      <section className="contact-columns">
        {/* Left column: Contact info + Map */}
        <div className="contact-left">
          <div className="contact-info">
            <p><MdLocationOn size={20} /> <strong>Address:</strong> 2027 Edwards St, St. Louis, MO 63110</p>
            <p><MdPhone size={20} /> <strong>Phone:</strong> 245-666-1234</p>
            <p><MdEmail size={20} /> <strong>Email:</strong> mailtocakefactory@gmail.com</p>
            <p><MdAccessTime size={20} /> <strong>Hours:</strong> Mon-Fri: 6:00 AM-5:00 PM | Sat: 8:00 AM-5:00 PM | Sun: Closed</p>
            <p><FaFacebook size={20} /> <strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61583264956563">Facebook Page</a></p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.XXXXXXX!2d-90.275083!3d38.616329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s2027%20Edwards%20St%2C%20St.%20Louis%2C%20MO%2063110!5e0!3m2!1sen!2sus!4vXXXXXXX"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="contact-right">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td><label htmlFor="name">Name:</label></td>
                  <td>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor="email">Email:</label></td>
                  <td>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor="phone">Phone:</label></td>
                  <td>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor="reason">Reason for Contact:</label></td>
                  <td>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                    >
                      <option value="">— Please Select —</option>
                      <option value="place an order">Place an order</option>
                      <option value="questions about order">Questions about order</option>
                      <option value="wholesale inquiry">Wholesale inquiry</option>
                      <option value="speak to management">Speak to management</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor="message">Message:</label></td>
                  <td>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center" }}>
                    <button type="submit">Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;