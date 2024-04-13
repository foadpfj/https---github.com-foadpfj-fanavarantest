
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CgArrowLongLeft } from "react-icons/cg";
import "./slider.css";

function Slider() {
    return (
        <>
            <div className=""></div>
            <Splide
                options={{
                    height: "100px",
                    width: "100%",
                    pagination: false,
                    perMove: 1,
                    type: "fade",
                    rewind: true,
                    arrows: true,
                    drag: true,
                    // autoplay: true,
                    // interval: 5000,
                    // speed: 1000,
                    // pauseOnHover: true,
                }}
            >

              </Splide>
                <div className="slider">
                  <div className="slider_contents">
                    <SplideSlide>
                      <div className="slider_contents_container">
                        <div className="slider_contents_container_top_one">
                          <div className="slider_contents_container_top_img">
                          <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/ماگ-لعابی-150x150-1.jpg" className="slider_contents_container_top_img_path" alt="img" />
                          </div>
                        </div>
                        <div className="slider_contents_container_bottom">
                          <h5 className="slider_contents_container_bottom_title">ماگ دیزنی و کلکسیونی</h5>
                          <a className="slider_contents_container_bottom_link">
                            <div className="slider_contents_container_bottom_link_details">
                              <p className="slider_contents_container_bottom_link_details_text">نمایش</p>
                              
                              <CgArrowLongLeft />
                            </div>
                          </a>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="slider_contents_container">
                        <div className="slider_contents_container_top_two">
                          <div className="slider_contents_container_top_img">
                          <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/ماگ-استیل-150x150-1.jpg" className="slider_contents_container_top_img_path" alt="img" />
                          </div>
                        </div>
                        <div className="slider_contents_container_bottom">
                          <h5 className="slider_contents_container_bottom_title">ماگ دیزنی و کلکسیونی</h5>
                          <a className="slider_contents_container_bottom_link">
                            <div className="slider_contents_container_bottom_link_details">
                              <p className="slider_contents_container_bottom_link_details_text">نمایش</p>
                              <CgArrowLongLeft />
                            </div>
                          </a>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="slider_contents_container">
                        <div className="slider_contents_container_top_three">
                          <div className="slider_contents_container_top_img">
                          <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/ماگ-دمنوش-150x150-Copy.jpg" className="slider_contents_container_top_img_path" alt="img" />
                          </div>
                        </div>
                        <div className="slider_contents_container_bottom">
                          <h5 className="slider_contents_container_bottom_title">ماگ دیزنی و کلکسیونی</h5>
                          <a className="slider_contents_container_bottom_link">
                            <div className="slider_contents_container_bottom_link_details">
                              <p className="slider_contents_container_bottom_link_details_text">نمایش</p>
                              <CgArrowLongLeft />
                            </div>
                          </a>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="slider_contents_container">
                        <div className="slider_contents_container_top_four">
                          <div className="slider_contents_container_top_img">
                          <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/ماگ-دوجداره-150x150-Copy.jpg" className="slider_contents_container_top_img_path" alt="img" />
                          </div>
                        </div>
                        <div className="slider_contents_container_bottom">
                          <h5 className="slider_contents_container_bottom_title">ماگ دیزنی و کلکسیونی</h5>
                          <a className="slider_contents_container_bottom_link">
                            <div className="slider_contents_container_bottom_link_details">
                              <p className="slider_contents_container_bottom_link_details_text">نمایش</p>
                              <CgArrowLongLeft />
                            </div>
                          </a>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="slider_contents_container">
                        <div className="slider_contents_container_top_five">
                          <div className="slider_contents_container_top_img">
                          <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/ماگ-دیزنی-150x150-Copy.jpg" className="slider_contents_container_top_img_path" alt="img" />
                          </div>
                        </div>
                        <div className="slider_contents_container_bottom">
                          <h5 className="slider_contents_container_bottom_title">ماگ دیزنی و کلکسیونی</h5>
                          <a className="slider_contents_container_bottom_link">
                            <div className="slider_contents_container_bottom_link_details">
                              <p className="slider_contents_container_bottom_link_details_text">نمایش</p>
                              <CgArrowLongLeft />
                            </div>
                          </a>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="slider_contents_container">
                        <div className="slider_contents_container_top_six">
                          <div className="slider_contents_container_top_img">
                          <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/ماگ-سرامیکی-150x150-1.jpg" className="slider_contents_container_top_img_path" alt="img" />
                          </div>
                        </div>
                        <div className="slider_contents_container_bottom">
                          <h5 className="slider_contents_container_bottom_title">ماگ دیزنی و کلکسیونی</h5>
                          <a className="slider_contents_container_bottom_link">
                            <div className="slider_contents_container_bottom_link_details">
                              <p className="slider_contents_container_bottom_link_details_text">نمایش</p>
                              <CgArrowLongLeft />
                            </div>
                          </a>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="slider_contents_container">
                        <div className="slider_contents_container_top_six">
                          <div className="slider_contents_container_top_img">
                          <img src="https://jingilpingil.shop/wp-content/uploads/2024/04/ماگ-پیرکس-150x150-Copy.jpg" alt="img" />
                          </div>
                        </div>
                        <div className="slider_contents_container_bottom">
                          <h5 className="slider_contents_container_bottom_title">ماگ دیزنی و کلکسیونی</h5>
                          <a className="slider_contents_container_bottom_link">
                            <div className="slider_contents_container_bottom_link_details">
                              <p className="slider_contents_container_bottom_link_details_text">نمایش</p>
                              <CgArrowLongLeft />
                            </div>
                          </a>
                        </div>
                      </div>
                    </SplideSlide>
                    
                  </div>
                </div>
        </>
    );
  }
  
  export default Slider;