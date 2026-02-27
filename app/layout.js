import { Roboto } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Social from "@/components/landingpage/Social";
import Stickybutton from "@/components/landingpage/Stickybutton";
import Whatsapp from "@/components/Whatsapp";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  metadataBase: new URL("https://barbendingmachinesupplier.com"),

  title: {
    default: "Bar Bending Machine Supplier in India",
    template: "%s | Shree Shakti Infratech",
  },

  description:
    "Bar Bending Machine Supplier - Shree Shakti Infratech offers highly accurate machines with efficient performance.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.png",
  },

  openGraph: {
    title: "Bar Bending Machine Supplier in India",
    description:
      "Shree Shakti Infratech offers highly accurate bar bending machines with efficient performance.",
    url: "https://barbendingmachinesupplier.com",
    siteName: "Shree Shakti Infratech",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google reCAPTCHA script */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>

   <Social />
        <Stickybutton />
      
        <ScrollToTop />
        <Whatsapp></Whatsapp>


        <main>{children}</main>
      </body>
    </html>
  );
}
