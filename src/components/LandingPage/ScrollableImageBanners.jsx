import React from "react";
// import banner_img01 from "../../assets/images/banner_img01.jpg";
import banner_img02 from "../../assets/images/banner_img02.jpg";
import banner_img03 from "../../assets/images/banner_img03.jpg";
import banner_img04 from "../../assets/images/banner_img04.jpg";
import banner_img05 from "../../assets/images/banner_img05.jpg";
import banner_img06 from "../../assets/images/banner_img06.jpg";
import banner_img07 from "../../assets/images/banner_img07.jpg";
import banner_img08 from "../../assets/images/banner_img08.jpg";

function Card({ item }) {
  console.log(item);
  return (
    <div className="cards mx-2 min-w-64 min-h-80">
      <img className="w-full h-full object-cover" src={item} alt="" />
    </div>
  );
}

function ScrollableImageBanners() {
  const list = [
    banner_img04,
    banner_img05,
    banner_img06,
    banner_img07,
    banner_img08,
  ];
  return (
    <div className="scrollable_banner_wrapper w-full px-2 lg:px-20">
      <div className="flex overflow-x-scroll hide-scrollbar box-content py-10 ">
        {list.map((item, index) => (
          <Card item={item} id={index} />
        ))}
      </div>
    </div>
  );
}

export default ScrollableImageBanners;
