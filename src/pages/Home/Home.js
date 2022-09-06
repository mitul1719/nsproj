import React from "react";
import "./styles.css";
import Bitmap from "../../assets/Bitmap.svg";
import NavBar from "../../Components/navbar";
const Home = () => {
  return (
    <div className="back">
      <img src={Bitmap} alt="" className="image" />
      <NavBar />
    </div>
  );
};

export default Home;
