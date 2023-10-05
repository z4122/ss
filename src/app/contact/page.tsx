import { BannerHeader } from "@/app/(components)/header/header";
import { ContactPage } from "@/app/contact/(components)/contact-page";
import React from "react";
import { Footer } from "@/app/(components)/footer/footer";

export default function Contact() {
  return (
    <div>
      <BannerHeader isDark={false} />

      <ContactPage />

      <Footer isDark={false} />
    </div>
  );
}
