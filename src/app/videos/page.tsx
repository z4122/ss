import React from "react";
import { BannerHeader } from "@/app/(components)/header/header";
import { Footer } from "@/app/(components)/footer/footer";
import { VideoPage } from "@/app/videos/(components)/video-page";

export default function Contact() {
  return (
    <div>
      <BannerHeader isDark={true} />

      <VideoPage />

      <Footer isDark={true} />
    </div>
  );
}
