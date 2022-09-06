import React from "react";
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Notifications from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/245px-Netflix_2015_logo.svg.png" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src='https://media.istockphoto.com/photos/profile-of-young-man-picture-id1322275410?b=1&k=20&m=1322275410&s=170667a&w=0&h=ZW7c2uyCDXxefncSb-Gk3ccPVBpkC3Obm5NYToo9sbE=' alt='' />
          <div className="profile">
          <ArrowDropDownIcon className="icon" />
          <div className="options">
              <span>Settings</span>
              <span>Logout</span>
          </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Navbar