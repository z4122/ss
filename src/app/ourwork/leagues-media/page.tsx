import React from "react";
import { BannerHeader } from "@/app/(components)/header/header";
import { Footer } from "@/app/(components)/footer/footer";
import { LeaguesMediaPage } from "@/app/ourwork/leagues-media/(components)/leagues-media-page";

export default function LeaguesMedia() {
  return (
    <div>
      <BannerHeader isDark={true} />

       <LeaguesMediaPage />

      <Footer isDark={true} />
    </div>
  );
}