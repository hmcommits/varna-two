import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const handwriting = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Varna | Everyday Essentials & Custom Fits",
  description: "Same You, Bolder Fits. Everyday essentials, custom wear & prints. Wear Your Colors.",
  icons: {
    icon: "/images/logo-varna-circle.png",
    apple: "/images/logo-varna-circle.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${handwriting.variable} antialiased`}
    >
      <body className="min-h-full max-w-full overflow-x-hidden bg-[#FAF7F2] text-[#1E1B18] font-sans selection:bg-[#E06A3B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
