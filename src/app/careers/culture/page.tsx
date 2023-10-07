import React from "react";
import { BannerHeader } from "@/app/(components)/header/header";
import { CulturePage } from "@/app/careers/culture/(components)/culture-page";
import { Footer } from "@/app/(components)/footer/footer";

export default function Culture() {
  return (
    <div>
      <BannerHeader isDark={false} />
      <CulturePage />
      <Footer isDark={false} />
    </div>
  );
}
