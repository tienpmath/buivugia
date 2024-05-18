"use client";
import React from "react";
import Image from "next/image";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Benefit from "@/components/Home1/Benefit";
import Newsletter from "@/components/Home4/Newsletter";
import Instagram from "@/components/Home6/Instagram";
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Đèn decor, bàn ghế mây tre handmade Bui Vũ Gia Đà Lạt - Lâm Đồng",
  description:
    "Bùi Vũ Gia: phân phối sỉ, lẻ đèn decor, bàn ghế mây tre handmade  uy tín tại Đà Lạt, Bảo Lộc, Đức Trọng ☎️ 0933580048 Thiết kế Đèn trang trí mây tre đan, bàn ghế mây tre thủ công ✔️✔️ Thiết kế quán, nhà hàng, homestay, quán cafe theo phong cách mấy tre",
  openGraph: {
    title: "Đèn decor, bàn ghế mây tre handmade Bui Vũ Gia Đà Lạt - Lâm Đồng",
    description:
      "Bùi Vũ Gia: phân phối sỉ, lẻ đèn decor, bàn ghế mây tre handmade  uy tín tại Đà Lạt, Bảo Lộc, Đức Trọng ☎️ 0933580048 Thiết kế Đèn trang trí mây tre đan, bàn ghế mây tre thủ công ✔️✔️ Thiết kế quán, nhà hàng, homestay, quán cafe theo phong cách mấy tre",
    images: "/logo.png",
  },
};

const AboutUs = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb
          heading="Giới Thiệu Mây Tre Bùi Vũ Gia"
          subHeading="Giới Thiệu Mây Tre Bùi Vũ Gia"
        />
      </div>
      <div className="about md:pt-20 pt-10">
        <div className="about-us-block">
          <div className="container">
            <div className="text flex items-center justify-center">
              <div className="content md:w-5/6 w-full">
                <div className="heading3 text-center">
                  Công Ty sản xuất mây tre đan handmade Đà Lạt - Bảo Lộc - Đức
                  Trọng - Lâm Đồng
                </div>
                <div className="body1 text-center md:mt-7 mt-5">
                  Mây tre đan tại Việt Nam là một ngành nghề thủ công mỹ nghệ
                  truyền thống, dựa trên việc sử dụng hai nguyên liệu cơ bản là
                  mây và tre. Nghệ nhân trong ngành này chuyên tạo ra các sản
                  phẩm thủ công mỹ nghệ đa dạng, từ đồ gia dụng thông thường đến
                  các tác phẩm nghệ thuật phức tạp.
                  <br />
                  Với tiêu chí “Người Việt dùng hàng Việt”, rất nhiều các mẫu
                  sản phẩm mây tre đan đã được sản xuất đại trà để đáp ứng thị
                  hiếu của người tiêu dùng trong nước. Chúng tôi hiện tại đang
                  phân phối chủ yếu các nhóm sản phẩm về đèn mây tre, lồng chim,
                  giỏ tre, khay tre, đèn hạt cườm, các sản phẩm nhựa giả mây.
                  Đặc biệt với sự đa dạng về mẫu mã và chất lượng về sản phẩm,
                  các sản phẩm về đèn như đèn hạt cườm, đèn mây tre, đèn nến,
                  đèn lồng chim…của công ty đã được dùng để trang trí trong rất
                  nhiều nhà hàng, khách sạn, resort, bar, quán cà phê, biệt thự,
                  khung trung tâm thương mại, đình chùa.
                </div>
              </div>
            </div>
            <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
              <div className="bg-img">
                <Image
                  src={"/images/products/top4.jpg"}
                  width={2000}
                  height={3000}
                  alt="bg-img"
                  className="w-full rounded-[30px]"
                />
              </div>
              <div className="bg-img">
                <Image
                  src={"/images/products/top4.jpg"}
                  width={2000}
                  height={3000}
                  alt="bg-img"
                  className="w-full rounded-[30px]"
                />
              </div>
              <div className="bg-img">
                <Image
                  src={"/images/products/top4.jpg"}
                  width={2000}
                  height={3000}
                  alt="bg-img"
                  className="w-full rounded-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Benefit props="md:pt-20 pt-10" />
      <Newsletter props="bg-green md:mt-20 mt-10" />
      <Instagram />
      <Brand />
      <Footer />
    </>
  );
};

export default AboutUs;
