import type { Metadata } from "next";
import { Inter, Poppins, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sri Sai Venkateswara Engineering | Borewell Drilling & Motor Pump Experts | Mydukur",
  description:
    "Sri Sai Venkateswara Engineering is a trusted borewell drilling, motor pump installation, repair, Astral Pipes dealer and Gajraj Motor Pumps dealer serving Mydukur for over 15 years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${notoSansTelugu.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-bg text-text font-sans selection:bg-accent/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
