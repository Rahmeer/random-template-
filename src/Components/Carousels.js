import React from 'react';
import './carosels.css';

const Carousels = () => {
  return (
    <div className="cas_container_main">
      <div className="cas_container">
        <div className="cas_img">
          <img
            src="https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1520342311/content-items/002/280/924/paijsale_lobo-original.jpg?1520342311"
            alt=""
          />
        </div>
        <div className="">
          <p>nature</p>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
      </div>
      <div className="cas_container">
        <div className="cas_img">
          <img
            src="https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1523322264/content-items/002/321/327/helados3-original.jpg?1523322264"
            alt=""
          />
        </div>
        <div className="">
          <p>travels</p>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
      </div>
      <div className="cas_container">
        <div className="cas_img">
          <img
            src="https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1520342465/content-items/002/280/928/monta%25C3%25B1a_fucsia-original.jpg?1520342465"
            alt=""
          />
        </div>
        <div className="">
          <p>Architecture</p>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
