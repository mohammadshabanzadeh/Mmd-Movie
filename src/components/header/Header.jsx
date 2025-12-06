import React, { useState } from "react";
import Navigation from "./Navigation";
import SearchBox from "../SearchBox";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import bg1 from "../../assets/images/movies.jpg";
function Header() {

  const [bg , setBg] = useState(bg1)

  return (
    <header  className="py-12 bg-cover bg-center" style={{backgroundImage:`linear-gradient(to bottom,#00000061, #000000e3), url('${bg}') `}}>
      <div className="m-container ">
        <Navigation />
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg}/>
      </div>
    </header>
  );
}

export default Header;
