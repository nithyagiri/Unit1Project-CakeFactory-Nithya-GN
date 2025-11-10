

const ContactPage = () => {
    return (
        <main className="main-content">
            <h1>Location</h1>

                <div>
                    <div>2027 Edwards St, </div>
                    <div>St. Louis, MO 63110</div>
                </div>
           

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.4868974267765!2d-90.22799731712087!3d38.63768348546273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a73036068f%3A0x239134931737e684!2s3230%20Washington%20Ave%2C%20St.%20Louis%2C%20MO%2063103!5e0!3m2!1sen!2sus!4v1760081246872!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <h2>Contact</h2>

            <div id="contact-icons">
               
                    245-666-1234
               
            
                    mailtocakefactory@gmail.com
                
                
                    https://www.facebook.com/profile.php?id=61583264956563
                
               
            </div>
        </main>
    );
};

export default ContactPage;
