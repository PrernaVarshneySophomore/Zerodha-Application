import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="" id="supportWrapper">
        <h4 className="mt-5 fw-normal">Support Portal</h4>
        <a href="" className="mt-5">Track Tickets</a>
      </div>
      <div className="row">
        <div className="col-2 p-5"></div>
        <div className="col-4 p-5 sprt">
          <h1 className="fs-4 fw-normal mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="p-3 mb-3 rounded" style={{border:"none", width:"100%"}} placeholder="Eg. how do I activate F&O, why is my order getting rejected." />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-1 p-5"></div>
        <div className="col-4 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br />
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;