import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/36791282/pexels-photo-36791282.jpeg", search: "?auto=compress&w=2000" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/30438481/pexels-photo-30438481.jpeg", search: "?auto=compress&w=2000" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/wikipedia/commons/b/b3/Nice_Sun.jpg", search: "" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/wikipedia/commons/4/47/Cours_Saleya_-_Chapelle_de_la_Mis%C3%A9ricorde_-_Nice.jpeg", search: "" },
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, { key: "X-Content-Type-Options", value: "nosniff" }] }];
  },
};
export default nextConfig;
