import { FaLongArrowAltLeft } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoOptionsOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { LiaRandomSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

import "./navbar.css";

function Navbar() {
    return (
        <>
            <div className=""></div>
            <div className="navbar">
              <div className="navbar_container">
                <div className="navbar_container_content">
                  <div className="navbar_container_content_right">
                    <div className="navbar_container_content_right_box">
                      <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/jingilpingil-logo.png" className="navbar_container_content_right_box_img" alt="img" />
                    </div>
                  </div>
                  <div className="navbar_container_content_left">
                  <GoPerson />
                  <LiaRandomSolid />
                  <AiOutlineHeart />
                  <MdOutlineShoppingCart />
                  </div>
                </div>
                <div className="navbar_container_content_mid">
                   <div className="navbar_container_content_mid_searchbar">
                     <input className="navbar_container_content_mid_searchbar_input" type="search" placeholder="جستجو در فروشگاه جینگیل پینگیل..."></input>
                     <div className="navbar_container_content_mid_searchbar_icons"></div>
                       <div className="navbar_container_content_mid_searchbar_filter">
                         <IoOptionsOutline />
                       </div>
                       <div className="navbar_container_content_mid_search">
                         <AiOutlineSearch />
                       </div>
                     </div>
                   </div>
                  </div>
              </div>
        </>
    );
  }
  
  export default Navbar;