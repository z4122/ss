import React from "react";
import { BannerHeader } from "@/app/(components)/header/header";
import { Footer } from "@/app/(components)/footer/footer";
import { PressPage } from "@/app/press/(components)/press-page";

export default function Contact() {
  return (
    <div>
      <BannerHeader isDark={false} />

      <PressPage />

      <Footer isDark={false} />
    </div>
  );
}
