import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZTU2NzIwMDEt/ZTU2NzIwMDEt-OWVmYjJkMzQt-w1500._CB670405006_.jpg"
          alt="bkg img"
        ></img>
        <div className="home_row">
          <Product title="The Lean Startup" price={19.99} rating={5} image=""/>
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
