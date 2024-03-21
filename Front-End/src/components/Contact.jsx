import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact() {
  return (
    <div className="container-fluid mt-5" style={{ marginTop: '100px' }}>
      <div className="row">
        <div className="col-sm-6 p-3 bg-light text-white mt-5">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7829707981973!2d77.33140077452151!3d11.129535052582368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90792cc705737%3A0xabfdfb1e8d9d916d!2sImayam%20Textiles!5e0!3m2!1sen!2sin!4v1708513389180!5m2!1sen!2sin"
            style={{ minHeight: '350px', border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-sm-6 p-3 top mt-5">
          <h4 className="text-uppercase align-content-center justify-content-center">Get Touch With Us</h4>
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <form action="insert.php" method="post">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" />
                    <label htmlFor="name">Name</label>
                    <span id="nameError" style={{ color: 'aliceblue' }}></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="number" className="form-control" id="phone" name="phone" placeholder="Your phone" />
                    <label htmlFor="phone">Phone</label>
                    <span id="phoneError" style={{ color: 'aliceblue' }}></span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="number" className="form-control" id="email" name="email" placeholder="email" maxLength="" />
                    <label htmlFor="email">Email</label>
                    <span id="emailError" style={{ color: 'aliceblue' }}></span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a problem here"
                      id="Message"
                      name="Message"
                      style={{ height: '100px' }}
                    ></textarea>
                    <label htmlFor="problem">Message</label>
                    <span id="problemError" style={{ color: 'aliceblue' }}></span>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit" value="submit" onClick="validateForm()">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
