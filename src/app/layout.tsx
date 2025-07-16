import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose weights you need
  variable: '--font-poppins',
  display: 'swap',
})
export const metadata: Metadata = {
  title: "E-WasteWise",
  description: "Informational website about e-waste management and recycling",
  openGraph: {
    title: "E-WasteWise",
    description: "Informational website about e-waste management and recycling",
    url: "https://ewastewise.vercel.app", // Replace with your actual URL
    siteName: "E-WasteWise",
    images: [
      {
        url: "https://ewastewise.vercel.app/ewastewise.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "E-WasteWise Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
