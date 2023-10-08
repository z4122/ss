import React from "react";
import { BannerHeader } from "@/app/(components)/header/header";
import { Footer } from "@/app/(components)/footer/footer";
import { TeamsLeaguesPage } from "@/app/ourwork/teams-leagues/(components)/teams-leagues-page";

export default function TeamsLeagues() {
  return (
    <div>
      <BannerHeader isDark={false} />
      <TeamsLeaguesPage />
      <Footer isDark={false} />
    </div>
  );
}
