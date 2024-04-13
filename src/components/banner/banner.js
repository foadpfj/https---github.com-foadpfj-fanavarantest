

// import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./banner.css";

function Banner() {
    return (
        <>
            {/* <div className=""></div> */}
            <div className="banner">
              <div className="banner_container">
                <div className="banner_container_parts">
                  <div className="banner_container_parts_left">
                  <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/isolated-pair-of-white-mugs-free-png.webp" className="banner_container_parts_right_link_details_img" alt="img" />
                  </div>
                  <div className="banner_container_parts_right">
                    <h4 className="banner_container_parts_right_h4">ماگ</h4>
                    <h2 className="banner_container_parts_right_h2">جینگیل پینگیل</h2>
                    <p className="banner_container_parts_right_text">این فرصتو از دست نده</p>
                    <link rel="icon" href="favicon.ico" />
                    <div className="banner_container_parts_right_box">
                        <a className="banner_container_parts_right_box_link">
                            <div className="banner_container_parts_right_box_link_details">
                                <p className="banner_container_parts_right_link_details_text">مشاهده محصولات</p>
                                <FaLongArrowAltLeft />
                            </div>    
                        </a>
                    </div>
                  </div>
                </div>
              </div>
        
            </div>
        </>
    );
  }
  
  export default Banner;