import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ICT Đà Lạt",
    short_name:
      "Đèn decor, bàn ghế mây tre handmade Bui Vũ Gia Đà Lạt - Lâm Đồng 0933580048",
    description:
      "Đèn decor, bàn ghế mây tre handmade Bui Vũ Gia Đà Lạt - Lâm Đồng 0933580048",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
