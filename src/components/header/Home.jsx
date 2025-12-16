import React, { useState } from "react";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import bg1 from "../../assets/images/movies1.jpg";
import Main from "../main/Main";
import Footer from "../footer/Footer";
function Home() {

  const [bg , setBg] = useState(bg1)

  return (
    <>
    <header  className="md:pb-12 bg-cover bg-center" style={{backgroundImage:`linear-gradient(to bottom,#00000061, #000000e3,#000000cc), url('${bg}') `}}>
      <div className="m-container ">
        <Navigation />
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg}/>
      </div>
    </header>
    <Main />
    <Footer />
    </>
  );
}

export default Home;
