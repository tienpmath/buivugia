import Image from "next/image";
import Link from "next/link";
import React from "react";

const Map = () => {
  return (
    <>
      <div className="banner-block style-one grid sm:grid-cols-2 gap-5 md:pt-20 pt-10">
        <Link
          href={"/images/products/top4.jpg"}
          className="banner-item relative block overflow-hidden duration-500"
        >
          <center>
            {" "}
            Chi nhánh Bảo Lộc: 1B2 Nguyễn Công Trứ - Hoa Sơn Quán, Hàng Dừa,
            Phường 1, TP Bảo Lộc
          </center>
          <div className="banner-img">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3909.0364773475917!2d107.81332017505332!3d11.549241088650447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMyJzU3LjMiTiAxMDfCsDQ4JzU3LjIiRQ!5e0!3m2!1svi!2s!4v1715935454898!5m2!1svi!2s"
              width="100%"
              height="450"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            {/* <div className="heading2 text-white">
              MÂY TRE ĐAN - CHI NHÁNH BẢO LỘC
            </div> */}
            {/* <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">
              Shop Now
            </div> */}
          </div>
        </Link>
        <Link
          href={"/images/products/top4.jpg"}
          className="banner-item relative block overflow-hidden duration-500"
        >
          <center>
            {" "}
            Chi nhánh Đà Lạt: 50 Lý Tự Trọng, Phường 2, Thành phố Đà Lạt
          </center>
          <div className="banner-img">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3903.4310348406216!2d108.43651017505951!3d11.944630588284273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU2JzQwLjciTiAxMDjCsDI2JzIwLjciRQ!5e0!3m2!1svi!2s!4v1715936153272!5m2!1svi!2s"
              width="100%"
              height="450"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            {/* <div className="heading2 text-white">
              MÂY TRE ĐAN - CHI NHÁNH ĐÀ LẠT
            </div>
            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">
              Shop Now
            </div> */}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Map;
