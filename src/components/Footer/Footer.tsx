import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="footer-main bg-surface">
          <div className="container">
            <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
              <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                <Link href={"/"} className="logo">
                  <div className="heading6">
                    Chuyên sản phẩm mây tre đan Handmade
                  </div>
                </Link>
                <div className="flex gap-3 mt-3">
                  <div className="flex flex-col ">
                    <span className="text-button">Zalo: 0933 58 00 48</span>
                    <span className="text-button mt-3">
                      Phone: 0933 58 00 48
                    </span>
                    <span className="text-button mt-3">
                      {" "}
                      Chi nhánh Bảo Lộc: 1B2 Nguyễn Công Trứ - Hoa Sơn Quán,
                      Hàng Dừa, Phường 1, TP Bảo Lộc
                    </span>
                    <span className="text-button mt-3">
                      Chi nhánh Đà Lạt: 50 Lý Tự Trọng, Phường 2, Thành phố Đà
                      Lạt
                    </span>
                  </div>
                  <div className="flex flex-col ">
                    <span className="mt-3">Phone: 0933 58 00 48</span>
                    <span className="mt-3 pt-px">
                      50 Lý Tự Trọng, Phường 2, Thành phố Đà Lạt
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                  <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3">Thông tin</div>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit"
                      href={"/pages/contact"}
                    >
                      Liên hệ
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"#!"}
                    >
                      Dịch vụ
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/my-account"}
                    >
                      My Account
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/order-tracking"}
                    >
                      Đơn hàng
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/pages/faqs"}
                    >
                      Hỏi đáp
                    </Link>
                  </div>
                  <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3">Quick Shop</div>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit"
                      href={"/shop/breadcrumb1"}
                    >
                      Sản phẩm Mây Tre đan
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/shop/breadcrumb1"}
                    >
                      Sản phẩm đèn trang trí
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/shop/breadcrumb1"}
                    >
                      Cafe, quán, Nhà hàng
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/shop/breadcrumb1"}
                    >
                      Sân vườn, Homstay
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/blog"}
                    >
                      Tin tức
                    </Link>
                  </div>
                  <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3">Khách hàng</div>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit"
                      href={"/pages/faqs"}
                    >
                      Orders FAQs
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/pages/faqs"}
                    >
                      Shipping
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/pages/faqs"}
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={"/order-tracking"}
                    >
                      Return & Refund
                    </Link>
                  </div>
                </div>
                <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                  <div className="text-button-uppercase">Newletter</div>
                  <div className="caption1 mt-3">
                    Sign up for our newsletter and get 10% off your first
                    purchase
                  </div>
                  <div className="input-block w-full h-[52px] mt-4">
                    <form className="w-full h-full relative" action="post">
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line"
                        required
                      />
                      <button className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1">
                        <Icon.ArrowRight size={24} color="#fff" />
                      </button>
                    </form>
                  </div>
                  <div className="list-social flex items-center gap-6 mt-4">
                    <Link
                      href={"https://www.facebook.com/thegioihandmadebuivugia"}
                      target="_blank"
                    >
                      <div className="icon-facebook text-2xl text-black"></div>
                    </Link>
                    <Link
                      href={"https://www.facebook.com/thegioihandmadebuivugia"}
                      target="_blank"
                    >
                      <div className="icon-instagram text-2xl text-black"></div>
                    </Link>
                    <Link
                      href={"https://www.facebook.com/thegioihandmadebuivugia"}
                      target="_blank"
                    >
                      <div className="icon-twitter text-2xl text-black"></div>
                    </Link>
                    <Link
                      href={"https://www.facebook.com/thegioihandmadebuivugia"}
                      target="_blank"
                    >
                      <div className="icon-youtube text-2xl text-black"></div>
                    </Link>
                    <Link
                      href={"https://www.facebook.com/thegioihandmadebuivugia"}
                      target="_blank"
                    >
                      <div className="icon-pinterest text-2xl text-black"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom py-3 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
              <div className="left flex items-center gap-8">
                <div className="copyright caption1 text-secondary">
                  ©2023 Anvogue. All Rights Reserved.
                </div>
                <div className="select-block flex items-center gap-5 max-md:hidden">
                  <div className="choose-language flex items-center gap-1.5"></div>
                  <div className="choose-currency flex items-center gap-1.5"></div>
                </div>
              </div>
              <div className="right flex items-center gap-2">
                <div className="caption1 text-secondary">Payment:</div>
                <div className="payment-img">
                  <Image
                    src={"/images/payment/Frame-0.png"}
                    width={500}
                    height={500}
                    alt={"payment"}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src={"/images/payment/Frame-1.png"}
                    width={500}
                    height={500}
                    alt={"payment"}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src={"/images/payment/Frame-2.png"}
                    width={500}
                    height={500}
                    alt={"payment"}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src={"/images/payment/Frame-3.png"}
                    width={500}
                    height={500}
                    alt={"payment"}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src={"/images/payment/Frame-4.png"}
                    width={500}
                    height={500}
                    alt={"payment"}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src={"/images/payment/Frame-5.png"}
                    width={500}
                    height={500}
                    alt={"payment"}
                    className="w-9"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
