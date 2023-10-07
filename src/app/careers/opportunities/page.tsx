import React from "react";
import { BannerHeader } from "@/app/(components)/header/header";
import { OpportunitiesPage } from "@/app/careers/opportunities/(compenents)/opportunities-page";
import { Footer } from "@/app/(components)/footer/footer";

export default function Opportunities() {
  return (
    <div>
      <BannerHeader isDark={false} />
      <OpportunitiesPage />
      <Footer isDark={false} />
    </div>
  );
}
