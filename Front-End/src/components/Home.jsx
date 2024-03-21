import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../assets/i.jpeg'
import img2 from '../assets/ii.jpeg'

function Home() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-sm-6 p-3 text-center justify-content-center mt-2">
          <img className="img-fluid" src={img2} alt="" style={{ paddingLeft: '40px', height: '50%', width: '40%', marginTop: '-10px' }} />
          <h1 className="mt-3" id="text-style">Imayam Fabric</h1>
          <h1 className="mt-2">Outlet</h1>
          <p className="mt-3">Customized according to your preferences</p>
          <p className="mt-3">Finest traditional dresses, sarees, bridal wears, & more from all over India</p>
          <div className="justify-content-between">
            <button className="btn btn-success m-3 bg-light bg-dark text-light">
              <b><a style={{ textDecoration: 'none', color: 'white' }} href="#product">Shop Now</a></b>
            </button>
          </div>
        </div>
        <div className="col-sm-6 p-3">
          <div>
            <img className="img-fluid " src={img1} alt="" style={{ paddingLeft: '40px', height: '90%', width: '90%', marginTop: '-10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
