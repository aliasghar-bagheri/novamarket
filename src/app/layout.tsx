import type { Metadata } from 'next';
import '@/styles/globals.css';
import { vazirFont } from '@/constants/fonts';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | فروشگاه اینترنتی نوامارکت',
    default: 'فروشگاه اینترنتی نوا مارکت',
  },
  description:
    'هر آنچیزی که در زمینه و حوزه ی تکنولوژی نیاز دارید در نوا مارکت یافت میشود. انواع موبایل ها, لپ تاپ ها, گجت ها, لوازم و غیره را به آسانی خرید کنید و به موقع تحویل بگیرید',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      <body className={`${vazirFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
