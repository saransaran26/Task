import React from 'react';

function Footer() {
  return (
    <footer style={{ marginTop: '90px', backgroundColor: 'rgb(195, 211, 209)' }}>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-6 col-lg-3 p-5">
            <h3>Address</h3>
            <br />
            <p>
              28/16, Indhra Street, Near Kamatchiamman Kovil, (L.G Show Room Back Side), Kumaranandhapuram, Tirupur - 641
              603.
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 pt-5 justify-content-center text-center">
            <h3>Company</h3>
            <br />
            <p className="p">Home</p>
            <p className="p">About</p>
            <p className="p">Shop Now</p>
            <p className="p">Contact Us</p>
          </div>
          <div className="col-sm-6 col-lg-3 pt-5 justify-content-center text-center">
            <h3>Support</h3>
            <br />
            <p className="p">Help Center</p>
            <p className="p">Ask Question</p>
            <p className="p">Privacy policy</p>
            <p className="p">Terms & Condition</p>
          </div>
          <div className="col-sm-6 col-lg-3 pt-5 justify-content-center text-center">
            <h3>Location</h3>
            <br />
            <p className="p">Tirupur</p>
            <p className="p">Coimbatore</p>
            <p className="p">Chennai</p>
            <p className="p">Madurai</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
