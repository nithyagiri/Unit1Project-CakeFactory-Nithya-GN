import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md"; //for google design icon
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";// for social media icon

const ContactPage = () => {
    return (
        <main className="main-content">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <p><MdLocationOn size={20} /> <strong>Address:</strong> 2027 Edwards St, St. Louis, MO 63110</p>
        <p><MdPhone size={20} /> <strong>Phone:</strong>     245-666-1234</p>
        <p><MdEmail size={20} /> <strong>Email:</strong> mailtocakefactory@gmail.com</p>
        <p><MdAccessTime size={20} /> <strong>Hours:</strong> Mon-Fri: 6:00 AM-5:00 PM | Sat: 8:00 AM-5:00 PM | Sun: Closed</p>
        <p><FaFacebook size={20} /> <strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61583264956563">https://www.facebook.com/profile.php?id=61583264956563 </a> </p>
      </div>

      <form>
        <div className="form-group">                     
          <label>Name :</label>
          <input type="text" name="name"/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email"/>
        </div>
        <div className="form-group">
          <label>Phone :</label>
          <input type="tel" name="phone"/>
        </div>
        <div className="form-group">
          <label>Reason for contact :</label>
          <select name="reason">
            <option value="">— Please Select —</option>
            <option value="place an order">Place an order</option>
            <option value="questions about order">Questions about order</option>
            <option value="wholesale inquiry">Wholesale inquiry</option>
            <option value="speak to management">Speak to management</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Message :</label>
          <textarea name="message"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.4868974267765!2d-90.22799731712087!3d38.63768348546273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a73036068f%3A0x239134931737e684!2s3230%20Washington%20Ave%2C%20St.%20Louis%2C%20MO%2063103!5e0!3m2!1sen!2sus!4v1760081246872!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </main>
  );
};
export default ContactPage;
            

            
                
                
                    
                
               
            